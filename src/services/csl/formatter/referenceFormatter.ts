import axios from "axios";
import Reference from "../../../data/database/Reference";
import Sources from "../../../data/sources";
import FormattedReference from "../formattedReference";
import convertReferenceToCslJson from "./convertReferenceToCslJson";
import FormattedProject from "./formattedProject";

class ReferenceFormatter {
  public async formatReferences(references: Reference[], styleId: string): Promise<FormattedProject> {
    const formattedProject = new FormattedProject();
    if (styleId.indexOf("modern-language-association") > -1 || styleId === "default-mla") {
        formattedProject.TitleAlign = "center";
        formattedProject.TitleText = "Works Cited";
        formattedProject.TitleSize = 1;
        formattedProject.TitleSpacing = 0;
    } else if (styleId.indexOf("harvard") > -1) {
        formattedProject.TitleAlign = "left";
        formattedProject.TitleText = "Reference list";
        formattedProject.TitleSize = 1.5;
        formattedProject.TitleSpacing = 1;
    } else if (styleId.startsWith("apa") || styleId === "default-apa") {
        formattedProject.TitleAlign = "center";
        formattedProject.TitleText = "References";
        formattedProject.TitleSize = 1;
        formattedProject.TitleSpacing = 0;
    } else if (styleId.indexOf("chicago") > -1 || styleId.indexOf("turabian") > -1) {
        formattedProject.TitleAlign = "center";
        formattedProject.TitleText = "Bibliography";
        formattedProject.TitleSize = 1;
        formattedProject.TitleSpacing = 1;
    } else {
        formattedProject.TitleAlign = "left";
        formattedProject.TitleText = "Bibliography";
        formattedProject.TitleSize = 1.5;
        formattedProject.TitleSpacing = 1;
    }

    // if there's no references or no style set then return
    if (references == null || references.length === 0 || !styleId) {
        return formattedProject;
    }

    const cslJsonObjs = references.map((r) => {
        let referenceMetadataObj = JSON.parse(r.Json);
        let cslJsonObj = convertReferenceToCslJson(referenceMetadataObj);
        // if using MLA 8, remove http:// and https:// from URL
        cslJsonObj["id"] = r.Id.toString();
        cslJsonObj.type = Sources.All.find((s) => s.id.toString() === r.SourceId).type;
        return cslJsonObj;
    });

    const citationClusters = references.map((c) => {
      let citationCluster: any = {};
      let citationItem = {
        id: c.Id.toString()
      };
      citationCluster.citationItems = [citationItem];
      citationCluster.properties = {
        noteIndex: 0
      };
      return citationCluster;
    });

    let cslJsonStr = {
      items: cslJsonObjs,
      citationClusters
    };

    const response = await axios.post(`http://localhost:8100?citations=1&style=${styleId}`, cslJsonStr);

    if (response.data.bibliography) {
      const bibliography = response.data.bibliography;
      const bibliographyMetadata = bibliography[0];
      const bibliographyFormattedStrs = bibliography[1];

      const citations = response.data.citations;
      const citationStrs = citations.map((c) => c[1]);

      formattedProject.HasHangingIndent = bibliographyMetadata.hangingindent;
      formattedProject.LineSpacing = bibliographyMetadata.linespacing;
      formattedProject.EntrySpacing = bibliographyMetadata.entryspacing;

      for (let i = 0; i < bibliographyFormattedStrs.length; i++) {
        let referenceId = parseInt(bibliographyMetadata.entry_ids[i][0], 10);
        let referenceIndex = references.findIndex((r) => r.Id === referenceId);
        let formattedReference = new FormattedReference();
        formattedReference.BibliographyString = bibliographyFormattedStrs[i];
        formattedReference.CitationString = citationStrs[referenceIndex];
        formattedReference.Reference = references[referenceIndex];
        formattedProject.FormattedReferences.push(formattedReference);
      }
    } else {
      let citations = response.data.citations;
      let citationStrs = citations.map((c) => c[1]);
      for (let i = 0; i < citationStrs.length; i++) {
        let formattedReference = new FormattedReference();
        formattedReference.CitationString = citationStrs[i];
        formattedReference.Reference = references[i];
      }
    }

    return formattedProject;
  }
}

const singleton = new ReferenceFormatter();
export default singleton;

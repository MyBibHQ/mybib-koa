import * as fs from "fs";
import * as _ from "lodash";
import * as path from "path";
import * as xml2js from "xml2js";
import { CslStyle } from "./cslStyle";

class CslStyleLibrary {
  public Styles: Object = {};

  private PopularStyleIds: string[] = [
    "default-ama",
    "default-apa",
    "default-chicago",
    "chicago-fullnote-bibliography",
    "default-harvard",
    "harvard-australia",
    "ieee",
    "default-mhra",
    "default-mla",
    "modern-language-association-8th-edition",
    "oscola",
    "vancouver"
  ];

  public async LoadStyles(pathToStyles: string): Promise<void> {
    // clear existing styles
    for (const prop of Object.keys(this.Styles)) {
      delete this.Styles[prop];
    }

    const styleFiles = this.GetStyleFilesInDirectory(pathToStyles);

    for (let styleFile of styleFiles) {
      let styleXml: string = fs.readFileSync(pathToStyles + "/" + styleFile).toString();
      const parsedXml = await new Promise<any>((resolve, reject) => {
        xml2js.parseString(styleXml, function (err, result) {
          resolve(result);
        });
      }); 

      if (parsedXml.style && parsedXml.style.info) {
        const cslStyle = new CslStyle();
        cslStyle.Id = path.parse(styleFile).name;
        cslStyle.Name = parsedXml.style.info[0].title[0];
        cslStyle.ShortName = parsedXml.style.info[0]["title-short"] && parsedXml.style.info[0]["title-short"][0];
        // cslStyle.Format = parsedXml.style.info[0]
        cslStyle.Xml = styleXml;
        cslStyle.IsPopular = this.PopularStyleIds.indexOf(cslStyle.Id) > -1;

        this.Styles[cslStyle.Id] = cslStyle;
      }
    }
  }

  public Search(q: string): CslStyle[] {
    if (!q) {
      return _.orderBy(_.values(this.Styles).map((s) => {
        return Object.assign(new CslStyle(), s);
      }), ["IsPopular"], ["desc"]);
    }

    return _.orderBy(_.values(this.Styles).map((s) => {
      return Object.assign(new CslStyle(), s);
    }).filter((s) => {
      return s.Name.toLowerCase().indexOf(q.toLowerCase()) > -1;
    }), ["IsPopular"], ["desc"]);
  }

  private GetStyleFilesInDirectory(dirPath): string[] {
    let styleFiles: string[] = [];

    try {
      styleFiles = fs.readdirSync(dirPath).filter((f) => {
        return path.extname(f) === ".csl";
      });
    } catch {
      // nothing
    }

    return styleFiles;
  }
}

const singleton = new CslStyleLibrary();
export default singleton;

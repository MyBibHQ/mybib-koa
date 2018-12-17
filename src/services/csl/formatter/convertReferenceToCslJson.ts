export default function ConvertReferenceToCslJson(reference: any): any {
  const cslJson = {};

  cslJson["abstract"] = reference.abstract;
  cslJson["annote"] = reference.annote;
  cslJson["archive"] = reference.archive;
  cslJson["archive_location"] = reference.archiveLocation;
  cslJson["archive-place"] = reference.archivePlace;
  cslJson["authority"] = reference.authority;
  cslJson["call-number"] = reference.callNumber;
  cslJson["citation-label"] = reference.citationLabel;
  cslJson["citation-number"] = reference.citationNumber;
  cslJson["collection-title"] = reference.collectionTitle;
  cslJson["container-title"] = reference.containerTitle;
  cslJson["container-title-short"] = reference.containerTitleShort;
  cslJson["dimensions"] = reference.dimensions;
  cslJson["DOI"] = reference.doi;
  cslJson["event"] = reference.event;
  cslJson["event-place"] = reference.eventPlace;
  cslJson["first-reference-note-number"] = reference.firstReferenceNoteNumber;
  cslJson["genre"] = reference.genre;
  cslJson["ISBN"] = reference.Iisbn;
  cslJson["jurisdiction"] = reference.jurisdiction;
  cslJson["keyword"] = reference.keyword;
  cslJson["locator"] = reference.locator;
  cslJson["medium"] = reference.medium;
  cslJson["note"] = reference.note;
  cslJson["original-publisher"] = reference.originalPublisher;
  cslJson["original-publisher-place"] = reference.originalPublisherPlace;
  cslJson["original-title"] = reference.originalTitle;
  cslJson["page"] = reference.page;
  cslJson["page-first"] = reference.pageFirst;
  cslJson["PMCID"] = reference.pmcid;
  cslJson["PMID"] = reference.pmid;
  cslJson["publisher"] = reference.publisher;
  cslJson["publisher-place"] = reference.publisherPlace;
  cslJson["references"] = reference.references;
  cslJson["reviewed-title"] = reference.reviewedTitle;
  cslJson["scale"] = reference.scale;
  cslJson["section"] = reference.section;
  cslJson["source"] = reference.source;
  cslJson["status"] = reference.status;
  cslJson["title"] = reference.title;
  cslJson["title-short"] = reference.titleShort;
  cslJson["URL"] = reference.url;
  cslJson["version"] = reference.version;
  cslJson["year-suffix"] = reference.yearSuffix;
  // numbers
  cslJson["chapter-number"] = reference.chapterNumber;
  cslJson["collection-number"] = reference.collectionNumber;
  cslJson["edition"] = reference.edition;
  cslJson["issue"] = reference.issue;
  cslJson["number"] = reference.number;
  cslJson["volume"] = reference.volume;
  // dates
  cslJson["accessed"] = [[reference.accessed.year]];
  cslJson["event-date"] = [[reference.eventDate.year]];
  cslJson["issued"] = [[reference.issued.year]];
  // names
  cslJson["author"] = reference.author.filter((a) => a.family || a.literal);
  cslJson["editor"] = reference.editor.filter((a) => a.family || a.literal);
  cslJson["translator"] = reference.translator.filter((a) => a.family || a.literal);

  return cslJson;
}

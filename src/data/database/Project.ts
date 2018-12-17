export default class Project {
  public Id: number;
  public UserId: number;
  public Title: string;
  public StyleId: string;
  public FolderName: string;
  public Order: number;
  public DeletedAt: string;

  public constructor() {
      this.Order = 1;
      this.StyleId = "modern-language-association-8th-edition";
  }
}

import * as uuidv1 from "uuid/v1";

export default class {
  public Id: number;
  public UserId: number;
  public Token: string;

  public constructor() {
    this.Token = uuidv1().replace(/-/g, "");
  }
}

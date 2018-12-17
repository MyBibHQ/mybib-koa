import Field from "./field";
import { SourceId } from "./sourceId";

export default class Source {
  public id: SourceId;
  public name: string;
  public type: string;
  public hasAutocite?: boolean;
  public fields: Field[];
}

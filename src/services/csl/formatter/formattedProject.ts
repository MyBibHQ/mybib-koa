import FormattedReference from "../formattedReference";

export default class FormattedProject {
  public FormattedReferences: FormattedReference[] = [];

  public EntrySpacing: number;
  public HasHangingIndent: boolean;
  public LineSpacing: number;
  public TitleAlign: string;
  public TitleText: string;
  public TitleSize: number;
  public TitleSpacing: number;
}

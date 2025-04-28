export interface InputWrapperBase {
  errorMessage: string;
  isErrorShow: boolean;
  handleChange(e: React.ChangeEvent<HTMLInputElement>): void;
  label: string;
  maxValue: number;
  value: string;
}

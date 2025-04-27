export interface InputWrapperBase {
  errorMessage: string;
  isErrorShow: boolean;
  handleChange(): void;
  label: string;
  maxValue: number;
}

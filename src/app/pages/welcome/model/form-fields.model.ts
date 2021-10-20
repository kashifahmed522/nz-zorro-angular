export interface FormFieldsModel {
  type: string;
  name: string;
  options: { key: string }[];
  value: any;
  required: any;
  disabled?: any;
}

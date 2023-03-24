export type ReviewInputInfo = {
  id: number;
  type: string;
  name: string;
  description?: string;
  example: string;
  isRequired: boolean;
  isLongAnswer: boolean;
};

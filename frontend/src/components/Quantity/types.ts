export interface IQuantity {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  className?: string;
}

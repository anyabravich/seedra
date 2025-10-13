export interface ICategory {
  text: string;
  isActive?: boolean;
  onClick?: () => void;
  className?: string;
}

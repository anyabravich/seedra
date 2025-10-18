export type IconName =
  | "instagram"
  | "facebook"
  | "search"
  | "basket"
  | "calling"
  | "msg"
  | "all"
  | "menu"
  | "arrow"
  | "range-line"
  | "filter"
  | "available"
  | "vegetables"
  | "bundles"
  | "fruits"
  | "supplies"
  | "flowers"
  | "herbs"
  | "minus"
  | "plus"
  | "close";

export interface IIcons {
  iconName: IconName;
  className?: string;
}

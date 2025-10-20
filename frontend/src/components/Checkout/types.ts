import { ICheckoutItem } from "@/hooks/useCheckout";

export interface ICheckoutCard extends ICheckoutItem {}

export interface ICheckout {
  goods: ICheckoutCard[];
}

export interface ICheckoutProps extends ICheckout {}

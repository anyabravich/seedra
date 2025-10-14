export interface ICardCheckout {
  name: string;
  price: number;
  quantity: number;
  onQuantityChange: (newQuantity: number) => void;
}

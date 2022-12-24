export interface ProductItemProps {
  type?: "default" | "small";
  id: string | number;
  name: string;
  image: string;
  price: number;
  brand: string;
  discount_percentage: number;
  disabled: boolean;
}

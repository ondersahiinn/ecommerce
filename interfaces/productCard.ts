export interface ProductItemProps {
  type?: "default" | "small";
  id: string | number;
  name: string;
  images: string[];
  price: number;
  brand: string;
  discount_percentage: number;
  disabled: boolean;
  showSlider?: boolean;
}

import { ProductSummary } from '../../graphql/queries';

export interface ProductCardProps {
  product: ProductSummary;
  onAddToCart: (id: number) => void;
}

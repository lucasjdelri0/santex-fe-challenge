import { ProductSummary } from '../../graphql/queries';

export interface ProductCardProps {
  product: ProductSummary;
  addingItem?: boolean;
  onAddToCart?: (id: number) => void;
}

import { ProductSummary } from '../../graphql/queries';

export interface AddToCartButtonProps {
  product: ProductSummary;
  loading?: boolean;
  onAddToCart?: (id: number) => void;
}

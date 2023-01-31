import { ProductSummary } from '../../graphql/queries';

export interface AddToCartButtonProps {
  product: ProductSummary;
  onAddToCart: (id: number) => void;
}

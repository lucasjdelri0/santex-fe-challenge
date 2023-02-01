import { VariantInfo } from '../../graphql/types';

export interface AddToCartButtonProps {
  product: VariantInfo;
  loading?: boolean;
  onAddToCart?: (id: number) => void;
}

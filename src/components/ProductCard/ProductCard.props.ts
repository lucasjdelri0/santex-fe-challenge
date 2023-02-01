import { VariantInfo } from '../../graphql/types';

export interface ProductCardProps {
  product: VariantInfo;
  addingItem?: boolean;
  onAddToCart?: (id: number) => void;
}

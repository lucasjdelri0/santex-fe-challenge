import { Product } from '../../graphql/types';

export interface ProductData {}

export interface ProductListProps {
  data: Product[];
  loading?: boolean;
  addingItem?: boolean;
  onAddToCart?: (id: number) => void;
}

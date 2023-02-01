import { Product } from '../../graphql/queries';

export interface ProductData {}

export interface ProductListProps {
  data: Product[] | undefined;
  loading?: boolean;
  addingItem?: boolean;
  onAddToCart?: (id: number) => void;
}

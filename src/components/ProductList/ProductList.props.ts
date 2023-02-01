import { ApolloError } from '@apollo/client';
import { Product } from '../../graphql/queries';

export interface ProductData {}

export interface ProductListProps {
  data: Product[] | undefined;
  loading: boolean;
  addingItem: boolean;
  error: ApolloError | undefined;
  onAddToCart: (id: number) => void;
}

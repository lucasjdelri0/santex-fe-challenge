import { gql } from '@apollo/client';
import { ORDER_FRAGMENT } from './utils';

export interface ProductAsset {
  name: string;
  source: string;
}

export interface ProductVariant {
  productId: number;
  id: number;
  name: string;
  price: number;
}

export interface ProductVariantList {
  items: ProductVariant[];
  totalItems: number;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  featuredAsset: ProductAsset;
  variantList: ProductVariantList;
}

export interface ProductsData {
  totalItems: number;
  items: Product[];
}

export interface ProductSummary {
  productId: number;
  variantId: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

const GET_PRODUCTS = gql`
  query {
    products {
      totalItems
      items {
        id
        name
        description
        featuredAsset {
          name
          source
        }
        variantList(options: { take: 1 }) {
          items {
            productId
            id
            name
            price
          }
        }
      }
    }
  }
`;

const GET_ACTIVE_ORDER = gql`
  {
    activeOrder {
      ...ActiveOrder
    }
  }
  ${ORDER_FRAGMENT}
`;

export { GET_PRODUCTS, GET_ACTIVE_ORDER };

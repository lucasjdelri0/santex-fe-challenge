import { gql } from '@apollo/client';
import { ORDER_FRAGMENT } from './utils';

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

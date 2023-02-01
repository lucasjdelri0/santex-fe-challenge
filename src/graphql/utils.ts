import { gql } from '@apollo/client';

const ORDER_FRAGMENT = gql`
  fragment ActiveOrder on Order {
    id
    lines {
      productVariant {
        id
        name
      }
      unitPrice
      quantity
    }
    totalQuantity
    shipping
    subTotal
    total
  }
`;

export { ORDER_FRAGMENT };

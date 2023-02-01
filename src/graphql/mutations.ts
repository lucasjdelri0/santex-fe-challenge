import { gql } from '@apollo/client';
import { ORDER_FRAGMENT } from './utils';

const ADD_TO_CART = gql`
  mutation AddItemToOrder($productVariantId: ID!, $quantity: Int!) {
    addItemToOrder(productVariantId: $productVariantId, quantity: $quantity) {
      ...ActiveOrder
    }
  }
  ${ORDER_FRAGMENT}
`;

const REMOVE_ALL_ORDERS = gql`
  mutation RemoveAllOrderLines {
    removeAllOrderLines {
      ...ActiveOrder
    }
  }
  ${ORDER_FRAGMENT}
`;

export { ADD_TO_CART, REMOVE_ALL_ORDERS };

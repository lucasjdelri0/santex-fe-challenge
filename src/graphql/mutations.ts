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

const GET_ACTIVE_ORDER = gql`
  {
    activeOrder {
      ...ActiveOrder
    }
  }
  ${ORDER_FRAGMENT}
`;

export { ORDER_FRAGMENT, GET_ACTIVE_ORDER, ADD_TO_CART, REMOVE_ALL_ORDERS };

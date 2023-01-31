import { ShoppingCartOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { AddToCartButtonProps } from './AddToCartButton.props';

export const AddToCartButton = ({
  product,
  onAddToCart,
}: AddToCartButtonProps) => {
  const { variantId } = product;

  return (
    <Button
      type="primary"
      icon={<ShoppingCartOutlined />}
      onClick={() => onAddToCart(variantId)}
    >
      Add To Cart
    </Button>
  );
};

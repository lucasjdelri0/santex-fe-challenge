import { ShoppingCartOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { AddToCartButtonProps } from './AddToCartButton.props';

export const AddToCartButton = ({
  product,
  loading,
  onAddToCart,
}: AddToCartButtonProps) => {
  const { variantId } = product;

  return (
    <Button
      type="dashed"
      icon={<ShoppingCartOutlined />}
      loading={loading}
      onClick={() => onAddToCart(variantId)}
    >
      Add To Cart
    </Button>
  );
};

import { ShoppingCartOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { AddToCartButtonProps } from './AddToCartButton.props';

export const AddToCartButton = ({ product }: AddToCartButtonProps) => {
  const { image, name, description } = product;

  return (
    <Button type="primary" icon={<ShoppingCartOutlined />}>
      Add To Cart
    </Button>
  );
};

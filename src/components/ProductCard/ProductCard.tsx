import { Card, Space, Typography } from 'antd';
import AddToCartButton from '../AddToCartButton';
import { ProductCardProps } from './ProductCard.props';

const { Text } = Typography;
const { Meta } = Card;

export const ProductCard = ({
  product,
  addingItem,
  onAddToCart,
}: ProductCardProps) => {
  const { productId, variantId, name, description, price, image } = product;

  return (
    <Card
      className="my-card"
      style={{
        width: 200,
        overflow: 'hidden',
        border: '1px solid lightgrey',
        borderRadius: 16,
      }}
      cover={
        <img
          alt={image ? 'image' : 'no_image'}
          src={image}
          style={{ height: 200 }}
        />
      }
      hoverable
      actions={[
        <AddToCartButton
          product={product}
          loading={addingItem}
          onAddToCart={(id) => onAddToCart(id)}
        />,
      ]}
    >
      <Meta
        title={`$ ${price.toLocaleString()}`}
        description={name}
        style={{ justifyContent: 'center' }}
      />
    </Card>
  );
};

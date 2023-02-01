import { Card } from 'antd';
import AddToCartButton from '../AddToCartButton';
import { ProductCardProps } from './ProductCard.props';

const { Meta } = Card;

export const ProductCard = ({
  product,
  addingItem,
  onAddToCart,
}: ProductCardProps) => {
  const { name, price, image } = product;

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
          alt={image ? 'prod-image' : 'no-image'}
          src={image}
          style={{ height: 200 }}
        />
      }
      hoverable
      actions={[
        <AddToCartButton
          product={product}
          loading={addingItem}
          onAddToCart={(id) => onAddToCart && onAddToCart(id)}
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

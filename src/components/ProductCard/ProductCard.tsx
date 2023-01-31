import { Card, Space, Typography } from 'antd';
import { ProductCardProps } from './ProductCard.props';

const { Text } = Typography;
const { Meta } = Card;

export const ProductCard = ({ product }: ProductCardProps) => {
  const { name, description, image } = product;

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
    >
      <Meta
        title={name ?? 'Unnamed'}
        description={
          <Space direction="vertical">
            <Text>{description}</Text>
          </Space>
        }
        style={{ justifyContent: 'center' }}
      />
    </Card>
  );
};

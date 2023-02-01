import { List } from 'antd';
import ProductCard from '../ProductCard';
import { ProductListProps } from './ProductList.props';

const ProductList = ({
  data,
  loading,
  addingItem,
  onAddToCart,
}: ProductListProps) => {
  return (
    <List
      grid={{
        gutter: 16,
      }}
      dataSource={data}
      pagination={{
        pageSize: 24,
        position: 'bottom',
        style: {
          marginBottom: 16,
        },
        total: data?.length,
        showTotal: (total, range) => `${range[0]}-${range[1]} of ${total}`,
        showSizeChanger: false,
      }}
      loading={loading}
      renderItem={(product) => {
        const {
          description,
          featuredAsset: { source },
          variantList: { items },
        } = product;
        const productVariant = items[0];
        return (
          <List.Item key={productVariant?.id}>
            <ProductCard
              product={{
                productId: productVariant?.productId,
                variantId: productVariant?.id,
                name: productVariant?.name,
                description,
                price: productVariant?.price,
                image: source,
              }}
              addingItem={addingItem}
              onAddToCart={(id) => onAddToCart && onAddToCart(id)}
            />
          </List.Item>
        );
      }}
      className="my-list"
      style={{
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        marginTop: 16,
      }}
    />
  );
};

export { ProductList };

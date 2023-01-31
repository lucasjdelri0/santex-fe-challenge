import { List } from 'antd';
import ProductCard from '../ProductCard';
import { ProductListProps } from './ProductList.props';

const ProductList = ({ data, loading, error }: ProductListProps) => {
  console.log('ProductList', data);

  return (
    <List
      grid={{
        gutter: 16,
      }}
      dataSource={data}
      // dataSource={search ? nftData : undefined}
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
        console.log('product', product);

        const {
          id,
          description,
          featuredAsset: { source },
          variantList: { items },
        } = product;

        const variant = items[0];

        return (
          <List.Item key={id}>
            <ProductCard
              product={{
                productId: variant?.productId,
                variantId: variant?.id,
                name: variant?.name,
                description,
                price: variant?.price,
                image: source,
              }}
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

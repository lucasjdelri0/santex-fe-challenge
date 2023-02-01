import ProductList from './components/ProductList';
import { useMutation, useQuery } from '@apollo/client';
import { GET_PRODUCTS } from './graphql/queries';
import { ADD_TO_CART, REMOVE_ALL_ORDERS } from './graphql/mutations';
import { Button } from 'antd';
import { useOrderContext } from './providers/OrderProvider';
import './App.css';
import { DeleteOutlined } from '@ant-design/icons';

const App = (): JSX.Element => {
  const { setSubTotal } = useOrderContext();
  const { data, loading } = useQuery(GET_PRODUCTS);
  const [addItemToOrder, { loading: addLoading }] = useMutation(ADD_TO_CART);
  const [removeAllOrderLines, { loading: removeLoading }] =
    useMutation(REMOVE_ALL_ORDERS);

  interface RemoveAllOrdersResponse {
    subTotal: number;
  }

  interface RemoveAllOrdersRequest {
    removeAllOrderLines: RemoveAllOrdersResponse;
  }

  interface RemoveAllOrdersData {
    data: RemoveAllOrdersRequest;
  }

  const handleRemoveAllOrders = async (): Promise<void> => {
    const result = (await removeAllOrderLines()) as RemoveAllOrdersData;
    const {
      data: {
        removeAllOrderLines: { subTotal },
      },
    } = result;
    setSubTotal(subTotal);
  };

  const handleAddToCart = async (id: number): Promise<void> => {
    const result = await addItemToOrder({
      variables: { productVariantId: id, quantity: 1 },
    });
    const {
      data: {
        addItemToOrder: { subTotal },
      },
    } = result;
    setSubTotal(subTotal);
  };

  return (
    <div
      className="my-container"
      style={{
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        padding: '0 24px',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button
          type="primary"
          danger
          icon={<DeleteOutlined />}
          style={{ marginLeft: 24 }}
          loading={removeLoading}
          onClick={handleRemoveAllOrders}
        >
          Clean Cart
        </Button>
      </div>
      {data && (
        <ProductList
          data={data.products.items}
          loading={loading}
          addingItem={addLoading}
          onAddToCart={(id) => handleAddToCart(id)}
        />
      )}
    </div>
  );
};

export default App;

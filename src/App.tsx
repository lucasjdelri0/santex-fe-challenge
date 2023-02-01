import ProductList from './components/ProductList';
import { useMutation, useQuery } from '@apollo/client';
import { GET_PRODUCTS } from './graphql/queries';
import { ADD_TO_CART, REMOVE_ALL_ORDERS } from './graphql/mutations';
import { Button } from 'antd';
import { useOrderContext } from './providers/OrderProvider';

const App = (): JSX.Element => {
  const { setSubTotal } = useOrderContext();
  const { data, loading, error } = useQuery(GET_PRODUCTS);
  const [addItemToOrder, { loading: addLoading }] = useMutation(ADD_TO_CART);
  const [removeAllOrderLines] = useMutation(REMOVE_ALL_ORDERS);

  if (loading) return <>'Fetching...'</>;
  if (error) return <>Fetch error! ${error.message}</>;

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

  // if (!called) console.log('Not called...');
  // if (mLoading) console.log('Submitting...');
  // if (mError) console.log(`Submission error! ${mError.message}`);

  return (
    <>
      <Button onClick={handleRemoveAllOrders}>Clear Cart</Button>
      {data && (
        <ProductList
          data={data.products.items}
          loading={loading}
          addingItem={addLoading}
          error={error}
          onAddToCart={(id) => handleAddToCart(id)}
        />
      )}
    </>
  );
};

export default App;

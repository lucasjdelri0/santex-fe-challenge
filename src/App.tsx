import ProductList from './components/ProductList';
import { useMutation, useQuery } from '@apollo/client';
import { products } from './graphql/queries';
import {
  ADD_TO_CART,
  GET_ACTIVE_ORDER,
  REMOVE_ALL_ORDERS,
} from './graphql/mutations';
import { Button } from 'antd';

const App = (): JSX.Element => {
  const { loading, error, data } = useQuery(GET_ACTIVE_ORDER);
  console.log('activeOrder', data);
  const { loading: qLoading, error: qError, data: qData } = useQuery(products);
  const [
    addItemToOrder,
    { data: mData, loading: mLoading, error: mError, called },
  ] = useMutation(ADD_TO_CART);
  const [
    removeAllOrderLines,
    { data: rData, loading: rLoading, error: rError },
  ] = useMutation(REMOVE_ALL_ORDERS);
  console.log('remove', rData, rLoading, rError);

  if (qLoading) return <>'Fetching...'</>;
  if (qError) return <>Fetch error! ${qError.message}</>;

  if (!called) console.log('Not called...');
  if (mLoading) console.log('Submitting...');
  if (mError) console.log(`Submission error! ${mError.message}`);

  return (
    <>
      <Button onClick={async () => await removeAllOrderLines()}>
        Clear Cart
      </Button>
      {qData && (
        <ProductList
          data={qData.products.items}
          loading={qLoading}
          error={qError}
          onAddToCart={(id) =>
            addItemToOrder({ variables: { productVariantId: id, quantity: 1 } })
          }
        />
      )}
    </>
  );
};

export default App;

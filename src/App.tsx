import ProductList from './components/ProductList';
import { useMutation, useQuery } from '@apollo/client';
import { products } from './graphql/queries';
import {
  ADD_TO_CART,
  GET_ACTIVE_ORDER,
  REMOVE_ALL_ORDERS,
} from './graphql/mutations';
import { Button } from 'antd';
import { useOrderContext } from './providers/OrderProvider';

const App = (): JSX.Element => {
  const { setSubTotal } = useOrderContext();

  const { loading: qLoading, error: qError, data: qData } = useQuery(products);
  console.log('GET_PRODUCTS', qData, qLoading, qError);

  // const { loading, error, data } = useQuery(GET_ACTIVE_ORDER);
  // console.log('GET_ACTIVE_ORDER', data, loading, error);

  const [addItemToOrder, { data: mData, loading: mLoading, error: mError }] =
    useMutation(ADD_TO_CART);
  console.log('ADD_TO_CART', mData, mLoading, mError);

  // const [
  //   removeAllOrderLines,
  //   { data: rData, loading: rLoading, error: rError },
  // ] = useMutation(REMOVE_ALL_ORDERS);
  // console.log('remove', rData, rLoading, rError);

  if (qLoading) return <>'Fetching...'</>;
  if (qError) return <>Fetch error! ${qError.message}</>;

  const handleAddToCart = async (id: number): Promise<void> => {
    const result = await addItemToOrder({
      variables: { productVariantId: id, quantity: 1 },
    });
    console.log('mData', mData);
    console.log('result', result);
    const {
      data: {
        addItemToOrder: { subTotal },
      },
    } = result;
    console.log('subTotal', subTotal);
    localStorage.setItem('subTotal', JSON.stringify(subTotal));
    setSubTotal(subTotal);
  };

  // if (!called) console.log('Not called...');
  // if (mLoading) console.log('Submitting...');
  // if (mError) console.log(`Submission error! ${mError.message}`);

  return (
    <>
      {/* <Button onClick={async () => await removeAllOrderLines()}>
        Clear Cart
      </Button> */}
      {qData && (
        <ProductList
          data={qData.products.items}
          loading={qLoading}
          addingItem={mLoading}
          error={qError}
          onAddToCart={(id) => handleAddToCart(id)}
        />
      )}
    </>
  );
};

export default App;

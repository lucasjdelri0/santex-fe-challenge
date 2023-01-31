import ProductList from './components/ProductList';
import { useQuery } from '@apollo/client';
import { products } from './graphql/queries';

const App = () => {
  const { loading, error, data } = useQuery(products);

  return (
    <>
      {data && (
        <ProductList
          data={data.products.items}
          loading={loading}
          error={error}
        />
      )}
    </>
  );
};

export default App;

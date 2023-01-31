import { Header } from './components/Header';
import ProductList from './components/ProductList';
import { useQuery } from '@apollo/client';
import { products } from './graphql/queries';

const App = () => {
  const { loading, error, data } = useQuery(products);

  return (
    <>
      <Header />
      <div>
        {data && (
          <ProductList
            data={data.products.items}
            loading={loading}
            error={error}
          />
        )}
      </div>
    </>
  );
};

export default App;

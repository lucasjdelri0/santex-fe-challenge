import { useQuery } from '@apollo/client';
import { createContext, ReactNode, useContext, useState } from 'react';
import { GET_ACTIVE_ORDER } from '../graphql/mutations';

interface OrderContextType {
  subTotal: number;
  setSubTotal: (amount: number) => void;
}

const getLocalSubtotal = (): number => {
  const localData = localStorage.getItem('subTotal');
  return localData ? JSON.parse(localData) : 0;
};

const OrderContext = createContext<OrderContextType>({
  subTotal: getLocalSubtotal(),
  setSubTotal: () => {},
});

interface ProviderProps {
  children: ReactNode;
}

const OrderProvider = ({ children }: ProviderProps) => {
  console.log('---------------------------------------');

  const { loading, error, data } = useQuery(GET_ACTIVE_ORDER);
  console.log('GET_ACTIVE_ORDER', data, loading, error);
  // const initial = data?.activeOrder?.subTotal.toString() || '0';
  // console.log('initial', initial);

  // const [subTotal, setSubTotal] = useStateWithStorage('subTotal', initial);
  const [subTotal, setSubTotal] = useState(getLocalSubtotal);

  const value = {
    subTotal,
    setSubTotal,
  };

  return (
    <OrderContext.Provider value={value}>{children}</OrderContext.Provider>
  );
};

export const useOrderContext = (): OrderContextType => useContext(OrderContext);

export default OrderProvider;

import { createContext, ReactNode, useContext } from 'react';
import { useStateWithStorage } from '../hooks/useStateWithStorage';

interface OrderContextType {
  subTotal: number;
  setSubTotal: (amount: number) => void;
}

const OrderContext = createContext<OrderContextType>({
  subTotal: 0,
  setSubTotal: () => {},
});

interface ProviderProps {
  children: ReactNode;
}

const OrderProvider = ({ children }: ProviderProps) => {
  const [subTotal, setSubTotal] = useStateWithStorage('subTotal', '0');

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

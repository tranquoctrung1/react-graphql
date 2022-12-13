import { useOrder } from "../hooks/useOrder";

const OrderPage = () => {
  const { error, data, loading } = useOrder(100);

  console.log({ error, data, loading });

  if (error) {
    return <>something went wrong</>;
  }

  if (loading) {
    return <>loading.....</>;
  }

  return <>{JSON.stringify(data.getOrders[0])}</>;
};

export default OrderPage;

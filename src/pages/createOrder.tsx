import { useInsertOrder } from "../hooks/useOrder";

const CreateOrder = () => {
  const [createOrder, { error, data, loading }] = useInsertOrder();

  console.log({ error, data, loading });

  return (
    <>
      <button
        onClick={() =>
          createOrder({
            variables: {
              orderInput: {
                consumerName: "tran quoc trung",
                note: "no note",
                createAt: "2023-12-13T00:00:00",
              },
            },
          })
        }
      >
        Click me
      </button>
    </>
  );
};

export default CreateOrder;

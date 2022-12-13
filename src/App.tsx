import { useState } from "react";
import "./App.css";

import CreateOrder from "./pages/createOrder";
import OrderPage from "./pages/order";

function App() {
  return (
    <div className="App">
      <OrderPage></OrderPage>
      <CreateOrder />
    </div>
  );
}

export default App;

import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import ProductsTable from "./ProductsTable";


function App() {
  return (
    <Provider store={store}>
      <ProductsTable />
    </Provider>
  );
}

export default App;

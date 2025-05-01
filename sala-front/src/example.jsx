/src
├── App.js
├── ProductsTable.js
├── productsSlice.js
├── store.js


import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './productsSlice';

const store = configureStore({
  reducer: {
    products: productsReducer
  }
});

export default store;

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (_, { getState }) => {
    const { page, size, search } = getState().products;
    const searchParam = search ? `&search=${encodeURIComponent(search)}` : '';
    const response = await axios.get(`http://localhost:8080/api/products?page=${page}&size=${size}${searchParam}`);
    return response.data;
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    status: 'idle',
    error: null,
    page: 0,
    size: 10,
    totalPages: 1,
    search: ''
  },
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
      state.page = 0;
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchProducts.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.products = action.payload.content;
        state.totalPages = action.payload.totalPages;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export const { setPage, setSearch } = productsSlice.actions;
export default productsSlice.reducer;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, setPage, setSearch } from "./productsSlice";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductsTable = () => {
  const dispatch = useDispatch();
  const { products, status, page, totalPages, search } = useSelector(state => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch, page, search]);

  const handlePrev = () => {
    if (page > 0) dispatch(setPage(page - 1));
  };

  const handleNext = () => {
    if (page < totalPages - 1) dispatch(setPage(page + 1));
  };

  const handleSearchChange = (e) => {
    dispatch(setSearch(e.target.value));
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Liste des produits alimentaires</h2>

      <Form className="mb-3">
        <Form.Control
          type="text"
          placeholder="Rechercher par libellé..."
          value={search}
          onChange={handleSearchChange}
        />
      </Form>

      {status === "loading" && <p>Chargement...</p>}
      {status === "failed" && <p>Erreur lors du chargement</p>}

      {status === "succeeded" && (
        <>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Code Article</th>
                <th>Libellé</th>
                <th>Prix (€)</th>
              </tr>
            </thead>
            <tbody>
              {products.map(prod => (
                <tr key={prod.codeArticle}>
                  <td>{prod.codeArticle}</td>
                  <td>{prod.libelle}</td>
                  <td>{prod.prix.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </Table>

          <div className="d-flex justify-content-between">
            <Button variant="secondary" disabled={page === 0} onClick={handlePrev}>Précédent</Button>
            <span>Page {page + 1} sur {totalPages}</span>
            <Button variant="secondary" disabled={page >= totalPages - 1} onClick={handleNext}>Suivant</Button>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductsTable;


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



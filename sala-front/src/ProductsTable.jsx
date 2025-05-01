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
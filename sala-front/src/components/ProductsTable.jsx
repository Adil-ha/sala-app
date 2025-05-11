import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, setPage, setSearch } from "../slices/ProductsSlice";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductsTable = () => {
  const dispatch = useDispatch();
  const { products, status, page, totalPages, search } = useSelector(state => state.products);

  // Appel de l'API lorsque la page ou la recherche change
  useEffect(() => {
    dispatch(fetchProducts({ page, search }));
  }, [dispatch, page, search]);

  // Fonction de gestion du changement de page précédente
  const handlePrev = () => {
    if (page > 0) dispatch(setPage(page - 1));
  };

  // Fonction de gestion du changement de page suivante
  const handleNext = () => {
    if (page < totalPages - 1) dispatch(setPage(page + 1));
  };

  // Fonction de gestion du changement de la recherche
  const handleSearchChange = (e) => {
    dispatch(setSearch(e.target.value));
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Liste des produits alimentaires</h2>

      {/* Formulaire pour la recherche */}
      <Form className="mb-3">
        <Form.Control
          type="text"
          placeholder="Rechercher par libellé..."
          value={search}
          onChange={handleSearchChange}
        />
      </Form>

      {/* Affichage des différents états de chargement */}
      {status === "loading" && <p>Chargement...</p>}
      {status === "failed" && <p>Erreur lors du chargement</p>}

      {/* Affichage de la table avec les produits lorsque l'état est "succeeded" */}
      {status === "succeeded" && (
        <>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Code Article</th>
                <th>Libellé</th>
                <th>Prix d'achat (€)</th>
                <th>Prix de vente (€)</th>
              </tr>
            </thead>
            <tbody>
              {products.map(prod => (
                <tr key={prod.articleCode}>
                  <td>{prod.articleCode}</td>
                  <td>{prod.designation}</td>
                  <td>{prod.prixAchat.toFixed(2)}</td>
                  <td>{prod.prixVente.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </Table>

          {/* Affichage des boutons de pagination */}
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

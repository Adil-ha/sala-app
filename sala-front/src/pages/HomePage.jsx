import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="display-4">Bienvenue sur SalaMarket</h1>
        <p className="lead">Votre marketplace locale pour tous vos besoins.</p>
        <Link to="/productsTable" className="btn btn-primary btn-lg mt-3">
          Voir les produits
        </Link>
      </div>

      <div className="row">
        <div className="col-md-4">
          <h4>Livraison rapide</h4>
          <p>Nous livrons partout en un temps record avec suivi en temps réel.</p>
        </div>
        <div className="col-md-4">
          <h4>Produits variés</h4>
          <p>Découvrez des centaines de produits soigneusement sélectionnés.</p>
        </div>
        <div className="col-md-4">
          <h4>Soutien local</h4>
          <p>Chaque achat soutient les commerçants de votre région.</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

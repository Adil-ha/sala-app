import React from "react";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  const { name, stock, ventes, top, color } = product;

  let cardClass = "card";
  if (color === "red") cardClass += " red-background";
  if (color === "green") cardClass += " green-background";

  return (
    <div className={cardClass}>
      <p>{name}</p>
      <hr className="title-separator" />
      <p><b>STOCK</b></p>
      <div className="stock-section">
        <div className="values">
          <div className="value">
            <p className={stock[0] === "0" ? "rouge-gras" : ""}>{stock[0]}</p>
            <p>Actuel</p>
          </div>
          <div className="value">
            <p>{stock[1]}</p>
            <p>Optimal</p>
          </div>
          <div className="value">
            <p className={stock[2] === "0" ? "rouge-gras" : ""}>{stock[2]}</p>
            <p>Prévisionnel</p>
          </div>
        </div>
      </div>
      <p><b>VENTES</b></p>
      <div className="ventes-section">
        <div className="values">
          {ventes.map((val, i) => (
            <div className="value" key={i}>
              <p>{val}</p>
              <p>{["Jour", "Mois", "Prévisionnel"][i]}</p>
            </div>
          ))}
        </div>
      </div>
      <p><b>TOP</b></p>
      <p>{top}</p>
    </div>
  );
};

export default ProductCard;
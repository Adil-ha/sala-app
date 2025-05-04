import React, { useState } from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div className="dashboard">
      <div className="card red-background">
        <p>STEAK HACHE 45G INICIA 6KG</p>
        <hr className="title-separator" />
        <p><b>STOCK</b></p>
        <div className="stock-section">
          <div className="values">
            <div className="value">
              <p className="rouge-gras">2 Couches</p>
              <p>Actuel</p>
            </div>
            <div className="value">
              <p>1 PAL</p>
              <p>Optimal</p>
            </div>
            <div className="value">
              <p className="rouge-gras">0</p>
              <p>Prévisionnel</p>
            </div>
          </div>
        </div>
        <p><b>VENTES</b></p>
        <div className="ventes-section">
          <div className="values">
            <div className="value">
              <p>13 U</p>
              <p>Jour</p>
            </div>
            <div className="value">
              <p>34 U</p>
              <p>Mois</p>
            </div>
            <div className="value">
              <p>80 U</p>
              <p>Prévisionnel</p>
            </div>
          </div>
        </div>
        <p><b>TOP</b></p>
        <p>GLD - 10 U</p>
      </div>

      <div className="card red-background">
        <p>SAUCE PILI PILI COLONA</p>
        <hr className="title-separator" />
        <p><b>STOCK</b></p>
        <div className="stock-section">
          <div className="values">
            <div className="value">
              <p className="rouge-gras">1 Couche</p>
              <p>Actuel</p>
            </div>
            <div className="value">
              <p>2 PAL</p>
              <p>Optimal</p>
            </div>
            <div className="value">
              <p className="rouge-gras">0</p>
              <p>Prévisionnel</p>
            </div>
          </div>
        </div>
        <p><b>VENTES</b></p>
        <div className="ventes-section">
          <div className="values">
            <div className="value">
              <p>2 U</p>
              <p>Jour</p>
            </div>
            <div className="value">
              <p>16 U</p>
              <p>Mois</p>
            </div>
            <div className="value">
              <p>24 U</p>
              <p>Prévisionnel</p>
            </div>
          </div>
        </div>
        <p><b>TOP</b></p>
        <p>NIGHT PIZZA - 11 U</p>
      </div>

      {/* Add more cards as needed */}
      
      <div className={`floating-menu ${menuVisible ? 'visible' : ''}`}>
        <div className="menu-items">
          <button><i className="fas fa-drumstick-bite"></i></button> {/* Viande */}
          <button><i className="fas fa-fish"></i></button> {/* Poulet */}
          <button><i className="fas fa-cheese"></i></button> {/* Fromage */}
        </div>
        <button className="menu-btn" onClick={toggleMenu}>
          <i className="fas fa-plus"></i>
        </button>
      </div>
    </div>
  );
};

export default Dashboard;

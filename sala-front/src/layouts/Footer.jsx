import React from "react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white text-center py-4 mt-5">
      <div className="container">
        <p className="mb-1">&copy; {new Date().getFullYear()} SalaMarket</p>
        <small>Créé avec ❤️ par l'équipe SalaApp</small>
      </div>
    </footer>
  );
};

export default Footer;


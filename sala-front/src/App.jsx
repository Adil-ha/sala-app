import React from "react";
import { Outlet } from 'react-router-dom';
import NavBar  from "./layouts/NavBar";
import Footer from "./layouts/Footer";


function App() {
  return (
    <>
        <header>
          <NavBar/>
        </header>
        <main className="min-vh-100">
          <Outlet/>
        </main>
        <footer>
          <Footer/>
        </footer>

    </>

      
   
  );
}

export default App;

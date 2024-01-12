import React from "react";
import Cadastro from "./Components/Cadastro";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Listagem from "./Components/Listagem";
import { ProductProvider } from "./Context/ProductContext";

const App = () => {
  return (
    <BrowserRouter>
      <ProductProvider>
        <Routes>
          <Route path="/" element={<Cadastro />} />
          <Route path="/listagem" element={<Listagem />} />
        </Routes>
      </ProductProvider>
    </BrowserRouter>
  );
};

export default App;

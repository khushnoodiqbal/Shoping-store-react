import React from "react";
import Fetchproducts from "./pages/fetchproducts";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ProductsDetails from "./pages/productsDetail";
import Category from "./pages/category";
import Categorypage from "./pages/categorypage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/products/:category?" element={<Fetchproducts />} />
        <Route path="/products/:id" element={<ProductsDetails />} />
        <Route path="/category" element={<Category />} />
        <Route path="/category/:categoryName" element={<Categorypage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

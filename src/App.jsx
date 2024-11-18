import React from "react";
import Fetchproducts from "./pages/fetchproducts";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ProductsDetails from "./pages/productsDetail";
import Category from "./pages/category";
import Categorypage from "./pages/categorypage";
import PrivateRoute from "./components/private_route";
import UserAuthContexts from "./contexts/userAuth";
import Checkout from "./pages/checkout";
function App() {
  return (
    <BrowserRouter>
      <UserAuthContexts>
        <Routes>

          <Route path="/products/:id" element={<ProductsDetails />} />
          <Route path="/" element={<Fetchproducts />} />
          <Route
            path="/products/:category?"
            element={
              <PrivateRoute>
                <Fetchproducts />{" "}
              </PrivateRoute>
            }
          />

          <Route path="/category" element={<Category />} />
          <Route path="/checkout" element={<Checkout/>} />
          <Route path="/category/:categoryName" element={<Categorypage />} />
        </Routes>
      </UserAuthContexts>
    </BrowserRouter>
  );
}

export default App;

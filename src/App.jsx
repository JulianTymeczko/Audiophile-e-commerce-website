import "./App.css";
import Nav from "./Nav";
import Footer from "./Footer";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { createContext, useState } from "react";
import Headphones from "./pages/Headphones";
import Earphones from "./pages/Earphones";
import Speakers from "./pages/Speakers";
import Product from "./pages/Product";

export const CartContext = createContext();
function App() {
  const initialCart = () => {
    const startCart = localStorage.getItem("cart");
    return startCart ? JSON.parse(startCart) : [];
  };

  const [cart, setCart] = useState(initialCart);
  return (
    <>
      <Router>
        <CartContext.Provider value={{ cart, setCart }}>
          <Nav></Nav>
          <Routes>
            <Route>
              <Route
                path="/"
                element={
                  <>
                    <Home />
                  </>
                }
              />
            </Route>
            <Route
              path="/checkout"
              element={
                <>
                  <Checkout />
                </>
              }
            ></Route>
            <Route
              path="/headphones"
              element={
                <>
                  <Headphones />
                </>
              }
            ></Route>
            <Route
              path="/speakers"
              element={
                <>
                  <Speakers />
                </>
              }
            ></Route>
            <Route
              path="/earphones"
              element={
                <>
                  <Earphones />
                </>
              }
            ></Route>
            <Route
              path="/:id"
              element={
                <>
                  <Product />
                </>
              }
            ></Route>
            <Route path="/yx1-earphones" element={<Navigate to="/0" />}></Route>
            <Route
              path="/xx59-headphones"
              element={<Navigate to="/1" />}
            ></Route>
            <Route
              path="/xx99-mark-one-headphones"
              element={<Navigate to="/2" />}
            ></Route>
            <Route
              path="/xx99-mark-two-headphones"
              element={<Navigate to="/3" />}
            ></Route>
            <Route path="/zx7-speaker" element={<Navigate to="/4" />}></Route>
            <Route path="/zx9-speaker" element={<Navigate to="/5" />}></Route>
          </Routes>
          <Footer></Footer>
        </CartContext.Provider>
      </Router>
    </>
  );
}

export default App;

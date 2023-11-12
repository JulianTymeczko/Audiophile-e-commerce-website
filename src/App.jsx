import "./App.css";
import Nav from "./Nav";
import Footer from "./Footer";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createContext, useState } from "react";
import Headphones from "./pages/Headphones";
import Earphones from "./pages/Earphones";
import Speakers from "./pages/Speakers";
import Product from "./pages/Product";
export const CartContext = createContext();
function App() {
  const [cart, setCart] = useState([]);
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
          </Routes>
          <Footer></Footer>
        </CartContext.Provider>
      </Router>
    </>
  );
}

export default App;

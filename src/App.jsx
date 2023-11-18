import "./App.css";
import Nav from "./Nav";
import Footer from "./Footer";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import Error from "./pages/Error";
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { createContext, useState } from "react";
import Headphones from "./pages/Headphones";
import Earphones from "./pages/Earphones";
import Speakers from "./pages/Speakers";
import Product from "./pages/Product";
export const PayContext = createContext();
export const CartContext = createContext();
export const CashDelivery = createContext();
export const BlankForm = createContext();
export const GrandTotal = createContext();
function App() {
  const initialCart = () => {
    const startCart = localStorage.getItem("cart");
    return startCart ? JSON.parse(startCart) : [];
  };
  const [grandTotal, setGrandTotal] = useState(0);
  const [blankForm, setBlankForm] = useState("");
  const [cashDelivery, setcashDelivery] = useState("");
  const [cart, setCart] = useState(initialCart);
  const [pay, setPay] = useState(false);
  return (
    <>
      <Router>
        <GrandTotal.Provider value={{ grandTotal, setGrandTotal }}>
          <BlankForm.Provider value={{ blankForm, setBlankForm }}>
            <CashDelivery.Provider value={{ cashDelivery, setcashDelivery }}>
              <PayContext.Provider value={{ pay, setPay }}>
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
              </PayContext.Provider>
            </CashDelivery.Provider>
          </BlankForm.Provider>
        </GrandTotal.Provider>
      </Router>
    </>
  );
}

export default App;

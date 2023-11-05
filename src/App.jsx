import "./App.css";
import Nav from "./Nav";
import Footer from "./Footer";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Headphones from "./pages/Headphones";
import Earphones from "./pages/Earphones";
import Speakers from "./pages/Speakers";
function App() {
  return (
    <>
      <Router>
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
        </Routes>
        <Footer></Footer>
      </Router>
    </>
  );
}

export default App;

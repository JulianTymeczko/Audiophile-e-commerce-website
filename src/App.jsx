import "./App.css";
import Nav from "./Nav";
import Footer from "./Footer";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
        </Routes>
      </Router>
    </>
  );
}

export default App;

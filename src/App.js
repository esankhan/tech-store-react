import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/HomePage";
import About from "./pages/AboutPage";
import Products from "./pages/ProductsPage";
import Contact from "./pages/ContactPage";
import Cart from "./pages/CartPage";
import SingleProduct from "./pages/SingleProductPage";
import Default from "./pages/Default";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import SideCart from "./components/SideCart";
import Footer from "./components/Footer";
import TechstoreState from "./context/TechStoreContext/TechStoreState";

function App() {
  return (
    <TechstoreState>
      <div>
        {/* navbar,sidebar,cart,footer */}
        <Router>
          <Navbar />
          <Sidebar />
          <SideCart />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/about' exact component={About} />
            <Route path='/contact' exact component={Contact} />
            <Route path='/products' exact component={Products} />
            <Route path='/products/:id' exact component={SingleProduct} />
            <Route path='/cart' exact component={Cart} />
            <Route component={Default} />
          </Switch>
        </Router>
        <Footer />
      </div>
    </TechstoreState>
  );
}

export default App;

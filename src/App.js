import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./pages/HomePage";
import About from "./pages/AboutPage";
import Contact from "./pages/ContactPage";
import Default from "./pages/Default.js";
import SingleProduct from "./pages/SingleProductPage";
import Cart from "./pages/CartPage";
import Products from "./pages/ProductsPage";

import {Route, Switch} from 'react-router-dom';
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import SideCart from "./components/SideCart"
import Footer from "./components/Footer"

class App extends Component {
  render() {
    return (  
        <> {/* navbar, sidebar, cart, footer*/}
        <Navbar />
        <Sidebar />
        <SideCart />
        <Switch>
          <Route path= "/" exact component={Home}/>
          <Route path= "/about"  component={About}/>
          <Route path= "/contact"  component={Contact}/>
          <Route path= "/product/:id" exact component={SingleProduct}/>
          <Route path= "/products" exact component={Products}/>
          <Route path= "/cart" exact component={Cart}/>
          <Route component={Default}/>
        </Switch>
        <Footer />
        
        </>
    );
  }
}

export default App;


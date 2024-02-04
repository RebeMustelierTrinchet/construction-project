import React from 'react';
// import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import Layout from './pages/layout/layout';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { render } from "react-dom";
import Home from './pages/home/home.js';
import Layout from './pages/layout/layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import Services from './pages/services/services.js';
import Portafolio from './pages/portafolio/portafolio.js';
import Kitchen from './pages/kitchen/kitchen.js';
import ContService from './pages/ContService/ContService.js';
import KitchenDetails from './pages/kitchenDetails/kistechenDetails.js';
import ContacUs from './pages/contactUs/contactUs.js';

const rootElement = document.getElementById("root");
render(
  <Router>
    <Layout>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/services" element={<ContService/>} />
        <Route exact path="/portfolio" element={<Portafolio/>} />
        <Route exact path="/contact-us" element={<ContacUs/>} />

        <Route exact path="/kitchen" element={<KitchenDetails />} />
      </Routes>
    </Layout>
  </Router>,
  rootElement
);


reportWebVitals();

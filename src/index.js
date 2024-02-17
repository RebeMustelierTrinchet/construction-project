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
import Kitchen1 from './pages/kitchensProjects/Kitchen1/Kitchen1.js';
import Kitchen2 from './pages/kitchensProjects/kitchen2/kitchen2.js';
import Bath1 from './pages/bathProjects/bathProject1/bathProject.js';
import Bath2 from './pages/bathProjects/bathProject2/bathProject.js';

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

        <Route exact path="/kitchen1" element={<Kitchen1 />} />
        <Route exact path="/kitchen2" element={<Kitchen2/>} />

        <Route exact path="/Bath1" element={<Bath1/>} />
        <Route exact path="/Bath2" element={<Bath2/>} />
      </Routes>
    </Layout>
  </Router>,
  rootElement
);


reportWebVitals();

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
import Portafolio from './pages/portafolio/portafolio.js';
import ContService from './pages/ContService/ContService.js';
import ContacUs from './pages/contactUs/contactUs.js';
import ProjectDetails from './components/project-details/project-datails.js';

import { store } from "./redux/store";
import { Provider } from "react-redux";

const rootElement = document.getElementById("root");
render(
  <Router>
    <Provider store={store}>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/services" element={<ContService />} />
          <Route exact path="/portfolio" element={<Portafolio />} />
          <Route exact path="/contact-us" element={<ContacUs />} />
          <Route exact path="/project-details/:id" element={<ProjectDetails />} />
        </Routes>
      </Layout>
    </Provider>
  </Router>,
  rootElement
);


reportWebVitals();

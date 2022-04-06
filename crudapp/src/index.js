import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import {createRoot} from "react-dom/client"
import { Provider } from 'react-redux';
import crudStore from "./Components/Store/crud-store"

const container = document.getElementById("root")
const root = createRoot(container)
root.render(
  <BrowserRouter>
    <Provider store={crudStore}>
     <App/>
    </Provider>
  </BrowserRouter>
)
// reportWebVitals();

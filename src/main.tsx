import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename={import.meta.env?.VITE_IS_GITHUB_IO? "/read-track" : ""}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)// baca https://stackoverflow.com/questions/70395443/deploying-vite-js-react-build-to-gh-pages
//tentang BrowserRouter
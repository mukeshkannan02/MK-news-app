import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)




// import { ReactDOM } from "react-dom/client";
// import React from "react";


// const root = ReactDOM.createroot(document.getElementById("root"));
// root.render(<app/>)
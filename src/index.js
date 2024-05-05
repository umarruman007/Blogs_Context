import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AppContext } from "./Context/AppContext";
import AppContextProvider from "./Context/AppContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<AppContextProvider>
  <App />
</AppContextProvider>


);

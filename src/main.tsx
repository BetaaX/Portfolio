import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import "./global.css";
import { VLibrasLink } from "./components/VLibras/VLibras.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <div className="container">
            <App />
            <VLibrasLink />
        </div>
    </React.StrictMode>
);

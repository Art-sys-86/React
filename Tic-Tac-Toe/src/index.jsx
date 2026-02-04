import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css"; // Assuming you have styles

import Square from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
    <StrictMode>
        <Square />
    </StrictMode>
);
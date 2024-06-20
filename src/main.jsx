import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FullRecipe from "./fullrecipe/FullRecipe.jsx";
import NotFound from "./NotFound.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
          <Route path="/fullrecipe/:id" element={<FullRecipe />} />
          <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
);

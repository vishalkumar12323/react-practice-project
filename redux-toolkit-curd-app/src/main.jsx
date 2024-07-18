import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { CreatePost } from "./components/CreatePosts";
import { Header } from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/create-new" element={<CreatePost />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);

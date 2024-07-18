import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { CreatePost } from "./components/CreatePosts";
import { Header } from "./components/Header";
import { EditPost } from "./components/EditPost.jsx";
import { store } from "./app/store.js";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/create-new" element={<CreatePost />} />
          <Route path="/edit-post/:postId" element={<EditPost />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);

import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import UserProvider from "./context/UserProvider.jsx";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <UserProvider>
      <Toaster position="top-right" reverseOrder="false" />
      <App />
    </UserProvider>
  </BrowserRouter>,
);

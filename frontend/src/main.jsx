import { createRoot } from "react-dom/client";
import "./index.css";
import 'remixicon/fonts/remixicon.css'
import { BrowserRouter } from "react-router";
import RoutePage from "./routes/RoutePage";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <RoutePage />
  </BrowserRouter>
);

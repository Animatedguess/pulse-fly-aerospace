import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import DroneProduct from "./pages/DroneProduct.jsx";
import EarbudsProduct from "./pages/EarbudsProduct.jsx";
import Vision from "./pages/Vision.jsx";
import UserProfile from "./components/icons/UserProfile.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>}>
      <Route path="" element={<Home/>}/>
      <Route path="drone-product" element={<DroneProduct/>}/>
      <Route path="earbuds-product" element={<EarbudsProduct/>}/>
      <Route path="vision" element={<Vision/>}/>
      <Route path="userprofile" element={<UserProfile/>}/>
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

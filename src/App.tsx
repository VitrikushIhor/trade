import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { RouteConst } from "./assets/RouteConst";
import { HomePage } from "./Pages/HomePage";
import "./App.css";

const App = () => {
  return (
    <Routes>
      <Route path={RouteConst.HOME} element={<HomePage />} />
      <Route path="*" element={<Navigate to={RouteConst.HOME} />} />
    </Routes>
  );
};

export const AppContainer = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

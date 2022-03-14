import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./home";
import Dashboard from "./dashboard";

const Views = () => (
  <Routes>
    <Route index element={<Home />} />
    <Route path="/home" element={<Home />} />
    <Route path="/dashboard" element={<Dashboard />} />

    <Route path="*" element={<div>Not found</div>} />
  </Routes>
);

export default Views;

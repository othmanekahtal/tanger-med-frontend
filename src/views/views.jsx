import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./home";

const Views = () => (
  <Routes>
    <Route index element={<Home />} />
    <Route path="/home" element={<Home />} />
    <Route path="*" element={<div>Not found</div>} />
  </Routes>
);

export default Views;

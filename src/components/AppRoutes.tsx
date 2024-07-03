import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/log_in/log_in";
import SidePanel from "../pages/menu/sidepanel";

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/sidepanel" element={<SidePanel />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;

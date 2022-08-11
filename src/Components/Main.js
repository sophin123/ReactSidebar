import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Screens/Dashboard";
import Profile from "./Screens/Profile";

export default function Main() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Screens/Dashboard";
import Favourite from "./Screens/Favourite";
import Message from "./Screens/Message";
import Profile from "./Screens/Profile";

export default function Main() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/message" element={<Message />} />
        <Route path="/favourite" element={<Favourite />} />
      </Routes>
    </div>
  );
}

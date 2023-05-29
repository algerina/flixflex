import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import FlixFlex from "./pages/FlixFlex";
import Signup from "./pages/Signup";
import Player from "./pages/Player";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/" element={<FlixFlex />} />
        <Route exact path="/player" element={<Player />} />

      </Routes>
    </BrowserRouter>
  );
}


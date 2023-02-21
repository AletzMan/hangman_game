import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GamePage } from "../Routes/Game/GamePage";
import { HomePage } from "../Routes/Home/HomePage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/game" element={<GamePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

import React from "react";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import { GamePage } from "../Routes/Game/GamePage";
import { HomePage } from "../Routes/Home/HomePage";


function App() {
 
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/game" element={<GamePage />} />
      </Routes>
    </HashRouter>
  )
}

export default App

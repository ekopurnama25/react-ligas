import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import FavoriteLigas from "./pages/FavoriteLigas";
import DetailLigas from "./pages/DetailLigas";

function App() {
  const [favorites, setFavorites] = useState([]);
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          exact
          path="/"
          element={<Home setFavorites={setFavorites} favorites={favorites} />}
        />
        <Route
          path="/favorite"
          element={
            <FavoriteLigas favorites={favorites} setFavorites={setFavorites} />
          }
        />
        <Route path="/detailligas/:id" element={<DetailLigas />} />
        <Route path="/season/:id" element={<DetailLigas />} />
      </Routes>
    </Router>
  );
}

export default App;

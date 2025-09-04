import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import RatingPage from "./pages/RatingPage.jsx";
import ThankYouPage from "./pages/ThankYouPage.jsx";
import "./App.css";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<RatingPage></RatingPage>}></Route>
        <Route path="/thank-you" element={<ThankYouPage></ThankYouPage>}></Route>
      </Routes>
    </main>
  );
}

export default App;

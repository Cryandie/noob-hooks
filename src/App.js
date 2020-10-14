import React, { useState } from "react";
import "./App.css";
import { MovieCard } from "./Component/MovieCards";
import { Navigation } from "./Component/NavBaar";

function App() {
  const [nameSearch, setNameSearch] = useState("");
  const [rateSearch, setRateSearch] = useState("");
  return (
    <div className="App">
      <Navigation setNameSearch={setNameSearch} setRateSearch={setRateSearch} />
      <MovieCard nameSearch={nameSearch} rateSearch={rateSearch} />
    </div>
  );
}

export default App;

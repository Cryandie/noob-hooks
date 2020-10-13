import React, { useState } from "react";
import "./App.css";
import { MovieCard } from "./Component/MovieCards";
import { Navigation } from "./Component/NavBaar";

function App() {
  const [nameSearch, setNameSearch] = useState("");

  return (
    <div className="App">
      <Navigation setNameSearch={setNameSearch} />
      <MovieCard nameSearch={nameSearch} />
    </div>
  );
}

export default App;

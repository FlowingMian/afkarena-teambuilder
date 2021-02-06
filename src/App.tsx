import React from "react";
import heroes from "./data/heroes";
import compositions from "./data/compositions";
import HeroesList from "./components/HeroesList";
import "./App.css";

function App() {
  const compositionsList = compositions.map((c) => <div>{c.name}</div>);

  return (
    <div className="App">
      <header className="App-header">
        <HeroesList heroes={heroes} />
        {compositionsList}
      </header>
    </div>
  );
}

export default App;

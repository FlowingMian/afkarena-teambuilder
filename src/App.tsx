import React from "react";
import heroes from "./data/heroes";
import compositions from "./data/compositions";
import HeroBox from "./components/HeroBox";
import "./App.css";

function App() {
  const heroesList = heroes.map((h) => <HeroBox hero={h} />);

  const compositionsList = compositions.map((c) => <div>{c.name}</div>);

  return (
    <div className="App">
      <header className="App-header">
        {heroesList}
        {compositionsList}
      </header>
    </div>
  );
}

export default App;

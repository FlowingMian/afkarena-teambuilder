import React from "react";
import heroes from "./data/heroes";
import compositions from "./data/compositions";
import HeroList from "./components/Hero/HeroList/HeroList";
import CompositionList from "./components/Composition/CompositionList/CompositionList";
import AnalysisByUsage from "./components/AnalysisByUsage/AnalysisByUsage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <AnalysisByUsage heroes={heroes} compositions={compositions}/>
      <HeroList heroes={heroes} />
      <CompositionList compositions={compositions}/>
    </div>
  );
}

export default App;

import { useState } from "react";
import Reader from "../Reader/Reader";
import "./App.css";
import articles from "../../data/articles.json";

function App() {
  return (
    <>
      <Reader dataSet={articles} />
    </>
  );
}

export default App;

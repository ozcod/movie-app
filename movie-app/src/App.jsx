import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const Card = ({ title }) => {
  return (
    <div>
      <h2>{title}</h2>
    </div>
  );
};

const App = () => {
  return (
    <div className="card-conatiner">
      <h2> Hello </h2>

      <Card title="Meow" />
      <Card title="woof" />
      <Card title="Crrack" />
    </div>
  );
};

export default App;

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
// import "./index.css";

import {runnerConfig} from "./phaser/Settings/GameSettings";

// 特に使用しなくてもPhaserがnewできたらOK(tsconfigのnoUnusedParametersで対応)
const game = new Phaser.Game(runnerConfig);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// import { Model } from "./components/model.js";
// import { View } from "./components/view.js";

import { Controller } from "./components/controller.js";

// let test = new Model();
// let view = new View('.board');

let game = new Controller('.board');

game.startGame();
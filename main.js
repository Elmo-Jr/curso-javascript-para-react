import "./src/styles/settings/colors.css";
import "./src/styles/generic/reset.css";
import "./src/styles/elements/base.css";
import Boardgame from "./src/objects/BoardGame";

const $root = document.querySelector("#root");
const $htmlBoardGame = Boardgame(6);

$root.insertAdjacentHTML("beforeend", $htmlBoardGame);

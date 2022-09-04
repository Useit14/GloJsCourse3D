import timer from "./modules/timer";
import menu from "./modules/menu";
import modal from "./modules/modal";
import validate from "./modules/validationForm";
import tabs from "./modules/tabs";
import slider from "./modules/slider";

timer("31 august 2022");
menu();
modal();
validate();
tabs();
slider([
  "portfolio-content",
  "portfolio-item",
  "dot",
  "portfolio-item-active",
  "dot-active",
]);

import timer from "./modules/timer";
import menu from "./modules/menu";
import modal from "./modules/modal";
import tabs from "./modules/tabs";
import slider from "./modules/slider";
import validateForm from "./modules/validationForm";
import validateCalc from "./modules/validationCalc";
import calculate from "./modules/calc";
import sendForm from "./modules/sendForm";

timer("20 september 2022");
menu();
modal();
tabs();
slider(
  "portfolio-content",
  "portfolio-item",
  "portfolio-dots",
  "dot",
  "portfolio-item-active",
  "dot-active",
  "portfolio-btn",
  "arrow-left",
  "arrow-right"
);
validateForm("form1");
validateCalc();
calculate(100);
sendForm({ formId: "form1", someElem: [{ type: "block", id: "total" }] });
sendForm({ formId: "form2", someElem: [{ type: "block", id: "total" }] });
sendForm({ formId: "form3", someElem: [{ type: "block", id: "total" }] });

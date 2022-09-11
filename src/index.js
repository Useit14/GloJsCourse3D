import timer from "./modules/timer";
import menu from "./modules/menu";
import modal from "./modules/modal";
import validateForm from "./modules/validationForm";
import validateCalc from "./modules/validationCalc";
import calculate from "./modules/calc";
import sendForm from "./modules/sendForm";

timer("31 august 2022");
menu();
modal();
validateForm("form1");
validateCalc();
calculate(100);
sendForm({ formId: "form1", someElem: [{ type: "block", id: "total" }] });
sendForm({ formId: "form2", someElem: [{ type: "block", id: "total" }] });
sendForm({ formId: "form3", someElem: [{ type: "block", id: "total" }] });

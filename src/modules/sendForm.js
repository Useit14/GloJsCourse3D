/* eslint-disable indent */
import { validation, validateInput } from "./validationForm";
import { animate } from "./helpers";

const sendForm = ({ formId, someElem = [] }) => {
  const form = document.querySelector(`#${formId}`);
  const formInputs = form.querySelectorAll(`input`);
  const btnForm = form.querySelector(".form-btn");
  const statusBlock = document.createElement("div");
  const img = document.createElement("img");
  const successText = "Спасибо! Наш менеджер с Вами свяжется!";

  const initPreloader = () => {
    img.src = "./images/icons8-preloader-40.png";
    img.id = "preloader";
    img.style.opacity = "0";
    statusBlock.style.color = "white";
    form.append(img);
    form.append(statusBlock);
  };

  const sendData = async (data) => {
    statusBlock.textContent = "";
    statusBlock.style.opacity = "1";
    img.style.opacity = "1";

    animate({
      duration: 500,
      timing(timeFraction) {
        return 1 - Math.sin(Math.acos(timeFraction));
      },
      draw(progress) {
        img.style.transform = `rotate(${parseInt(progress * 360)}deg)`;
      },
    });
    return await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json",
      },
    }).then((res) => res.json());
  };

  const submitForm = () => {
    const formElemtns = form.querySelectorAll("input");

    const formData = new FormData(form);
    const formBody = {};

    formData.forEach((value, key) => {
      formBody[key] = value;
    });
    someElem.forEach((elem) => {
      const element = document.getElementById(elem.id);
      if (elem.type === "block") {
        formBody[elem.id] = element.textContent;
      } else if (elem.type === "input") {
        formBody[elem.id] = element.value;
      }
    });
    const { response, message } = validation(formId);
    if (response) {
      sendData(formBody)
        .then((data) => {
          img.style.opacity = "0";
          statusBlock.textContent = successText;
          animate({
            duration: 5000,
            timing(timeFraction) {
              return timeFraction;
            },
            draw(progress) {
              statusBlock.style.opacity = 1 - progress;
            },
          });
          formElemtns.forEach((input) => {
            input.value = "";
          });
        })
        .catch((error) => {
          img.style.opacity = "0";
          statusBlock.textContent = message.join(". ");
          animate({
            duration: 5000,
            timing(timeFraction) {
              return timeFraction;
            },
            draw(progress) {
              statusBlock.style.opacity = 1 - progress;
            },
          });
        });
    } else {
      img.style.opacity = "0";
      statusBlock.textContent = message.join(". ");
      animate({
        duration: 5000,
        timing(timeFraction) {
          return timeFraction;
        },
        draw(progress) {
          statusBlock.style.opacity = 1 - progress;
        },
      });
    }
  };

  try {
    if (!form) {
      throw new Error("Верните форму на место, пожалуйста");
    }

    formInputs.forEach((input) => {
      input.addEventListener("blur", (e) => validateInput(e));
    });

    btnForm.addEventListener("click", (event) => {
      event.preventDefault();
      initPreloader();
      submitForm();
    });
  } catch (error) {
    console.log(error);
  }
};

export default sendForm;

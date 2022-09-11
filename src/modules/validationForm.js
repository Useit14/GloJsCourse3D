/* eslint-disable indent */

const validation = () => {
  const userForm = document.querySelectorAll("form[name='user_form']");

  const validate = (e) => {
    if (
      e.target.matches("input[type='text']") &&
      !/[\W\-\s]+/gi.test(e.target.value) &&
      e.target.value !== ""
    ) {
      alert("Ошибка: Неккоректное имя");
      e.target.value = "";
    }

    if (
      e.target.classList.contains("form-email") &&
      !e.target.value.match(
        /[a-z\-\_\.\!\~\*]+[@][a-z\-\_\!\~\*]+[\.][a-z\-\_\!\~\*]+/gi
      ) &&
      e.target.value !== ""
    ) {
      alert("Ошибка: Неккоретный почтовый ящик");
      e.target.value = "";
    }

    if (
      e.target.classList.contains("form-phone") &&
      !e.target.value.match(/[\d-\(\)]+/gi) &&
      e.target.value !== ""
    ) {
      alert("Ошибка: Неккоретный номер телефона");
      e.target.value = "";
    }
  };

  userForm.forEach((form) => {
    form.addEventListener("change", (e) => validate(e));
  });

const validate = (idForm) => {
  const form1 = document.getElementById(idForm);

  const inputsName = form1.querySelectorAll("input[name='user_name']");
  const inputsEmail = form1.querySelectorAll("input[name='user_email']");
  const inputsTel = form1.querySelectorAll("input[name='user_phone']");
  const inputsMessage = form1.querySelectorAll("input[name='user_message']");
  let response = true;
  let message = [];

  inputsName.forEach((input) => {
    if (!/[\W\-\s]+/gi.test(input.value) && input.value !== "") {
      message.push("Ошибка: Неккоректное имя");
      input.value = "";
      response = false;
    }
  });

  inputsEmail.forEach((input) => {
    if (
      !input.value.match(
        /[a-z\-\_\.\!\~\*]+[@][a-z\-\_\!\~\*]+[\.][a-z\-\_\!\~\*]+/gi
      ) &&
      input.value !== ""
    ) {
      message.push("Ошибка: Неккоретный почтовый ящик");
      input.target.value = "";
      response = false;
    }
  });

  inputsTel.forEach((input) => {
    if (!input.value.match(/[\d-\(\)]+/gi) && input.value !== "") {
      message.push("Ошибка: Неккоретный номер телефона");
      input.value = "";
      response = false;
    }
  });

  inputsMessage.forEach((input) => {
    if (!input.value.match(/[а-я\s0-9\.\,\!\?]+/gi) && input.value !== "") {
      message.push("Ошибка: Неккоретное сообщение");
      input.value = "";
      response = false;
    }
  });
  return { response, message };
};

export default validate;

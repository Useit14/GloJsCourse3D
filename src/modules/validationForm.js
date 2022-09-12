/* eslint-disable indent */

export const validation = (idForm) => {
  const form1 = document.getElementById(idForm);
  const inputsName = form1.querySelectorAll("input[name='user_name']");
  const inputsEmail = form1.querySelectorAll("input[name='user_email']");
  const inputsTel = form1.querySelectorAll("input[name='user_phone']");
  const inputsMessage = form1.querySelectorAll("input[name='user_message']");
  let response = true;
  let message = [];

  inputsName.forEach((input) => {
    if (!/[\W\-\s]{2,}/gi.test(input.value) || input.value === "") {
      message.push("Ошибка: Неккоректное имя");
      input.value = "";
      response = false;
    }
  });

  inputsEmail.forEach((input) => {
    if (
      !input.value.match(
        /[a-z\-\_\.\!\~\*\']+[@][a-z\-\_\!\~\*\']+[\.][a-z\-\_\!\~\*\']+/gi
      ) ||
      input.value === ""
    ) {
      message.push("Ошибка: Неккоретный почтовый ящик");
      input.value = "";
      response = false;
    }
  });

  inputsTel.forEach((input) => {
    input.addEventListener("blur", (e) => validateInput(e));
    if (!input.value.match(/[\d\-\(\)]{6,11}/gi) || input.value === "") {
      message.push("Ошибка: Неккоретный номер телефона");
      input.value = "";
      response = false;
    }
  });

  inputsMessage.forEach((input) => {
    if (!input.value.match(/[а-я\s0-9\.\,\!\?]+/gi) || input.value === "") {
      message.push("Ошибка: Неккоретное сообщение");
      input.value = "";
      response = false;
    }
  });

  return { response, message };
};

export const validateInput = (e) => {
  e.target.value = e.target.value.replace(/[\s]{2}/gi, " ");
  e.target.value = e.target.value.replace(/^[\s\-]|[\s\-]$/gi, "");
  if (e.target.matches('input[type="text"]')) {
    e.target.value = e.target.value.replace(
      /([\w]?)([\w]+$)/gi,
      ($1, $2, $3) => {
        return $2.toString().toUpperCase() + $3.toString().toLowerCase();
      }
    );
  }
};

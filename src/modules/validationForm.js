/* eslint-disable indent */
const validation = () => {
  const userForm = document.querySelectorAll("form[name='user_form']");

  const validate = (e) => {
    debugger;
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
};

export default validation;

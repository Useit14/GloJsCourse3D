const validation = () => {
  const form1 = document.getElementById("form1");

  const validate = (form) => {
    let isError = false;
    const inputsText = form.querySelectorAll("input[type=text]");
    const inputsEmail = form.querySelectorAll(".form-email");
    const inputsTel = form.querySelectorAll(".form-phone");

    inputsText.forEach((input) => {
      input.addEventListener("change", (e) => {
        if (/\d+/gi.test(e.target.value) && e.target.value !== "")
          isError && alert("Ошибка: Цифры не допустимы");
        e.target.value = "";
      });
    });

    inputsEmail.forEach((input) => {
      input.addEventListener("change", (e) => {
        if (
          !/[a-z\-\_\.\!\~\*]+[@][a-z\-\_\!\~\*]+[\.][a-z\-\_\!\~\*]+/gi.test(
            e.target.value
          )
        ) {
          alert("Ошибка: Неккоретный почтовый ящик");
          e.target.value = "";
        }
      });
    });

    inputsTel.forEach((input) => {
      input.addEventListener("change", (e) => {
        if (/[^\d-\(\)]+/gi.test(e.target.value) && e.target.value !== "") {
          alert("Ошибка: Неккоретный номер телефона");
          e.target.value = "";
        }
      });
    });
  };

  form1.addEventListener("submit", (event, form1) => {
    event.preventDefault();
    validate(form1);
  });
  validate(form1);
};

export default validation;

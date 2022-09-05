const validation = () => {
  const validate = (input) => {
    if (!input.value.match(/\d/gi)) {
      alert("Введите цифры");
      input.value = "";
    }
  };

  const calcBlock = document.querySelector(".calc-block");

  calcBlock.addEventListener("change", (e) => {
    if (e.target.classList.contains("calc-item")) {
      validate(e.target);
    }
  });
};

export default validation;

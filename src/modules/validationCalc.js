const validation = () => {
  const validate = (e) => {
    e.target.value = e.target.value.replace(/[^0-9]/gi, "");
  };

  const calcBlock = document.querySelector(".calc-block");

  calcBlock.addEventListener("input", (e) => {
    if (e.target.classList.contains("calc-item")) {
      validate(e);
    }
  });
};

export default validation;

/* eslint-disable indent */
const validate = () => {
  const input = document.getElementById("input");

  const validateInput = (e) => {
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

  input.addEventListener("blur", (e) => validateInput(e));
};

export default validate;

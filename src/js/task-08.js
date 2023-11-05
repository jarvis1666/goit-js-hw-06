const form = document.querySelector("form.login-form");

const handleSubmit = (even) => {
  even.preventDefault();
  const email = form.elements.email.value;
  const password = form.elements.password.value;

  if (email === "" || password === "") {
    alert("Заповніть всі поля форми будь-ласка!");
  } else {
    const userData = {
      Email: `${email}`,
      Password: `${password}`,
    };
    console.log(userData);
    form.reset();
  }
};
form.addEventListener("submit", handleSubmit);

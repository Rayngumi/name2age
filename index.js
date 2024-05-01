document.getElementById("button").addEventListener("click", function () {
  const nameInput = document.getElementById("nameInput");
  const resultDiv = document.getElementById("result");
  const name = nameInput.value;

  if (name === "") {
    resultDiv.textContent = "Please enter a name";
    return;
  }

  fetch(`https://api.agify.io/?name=${name}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      resultDiv.textContent = `${name} is ${data.age} years old`;
    })
    .catch((error) => {
      resultDiv.textContent = `An error occurred: ${error.message}`;
    });
});



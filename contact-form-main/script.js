let submitForm = document.getElementById("myForm");

submitForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let userFirstName = document.getElementById("firstName").value;
  let userLastName = document.getElementById("lastName").value;
  let userEmail = document.getElementById("email").value;
  var selects = document.getElementsByName("user_radio");
  var select_value;
  for (var i = 0; i < selects.length; i++) {
    if (selects[i].checked) {
      select_value = selects[i].value;
    }
  }
  let userMessage = document.getElementById("message").value;
  console.log(userFirstName);
  console.log(userLastName);
  console.log(userEmail);
  console.log(select_value);
  console.log(userMessage);
  alert(
    `Dados enviados:\n
    Nome: ${userFirstName} ${userLastName}\n
    Email: ${userEmail}\n
    Opção: ${select_value}\n
    Mensagem: ${userMessage}\n
    `
  );

  const result = document.getElementById("result");
  result.innerHTML = `
  <h2>Dados Enviados:</h2>
  <p><strong>Nome:</strong> ${userFirstName} ${userLastName}</p>
  <p><strong>Email:</strong> ${userEmail}</p>
  <p><strong>Opção Selecionada:</strong> ${select_value}</p>
  <p><strong>Mensagem:</strong> ${userMessage}</p>
`;
  // handle submit
});

console.log(submitForm);

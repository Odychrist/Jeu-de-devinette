let number = Math.floor(Math.random() * 100);
const userNumber = document.querySelector(".js-input-element");
const buttonElement = document.querySelector(".js-button-element");
const resultElement = document.querySelector(".js-result");
const restartElement = document.querySelector(".js-restart-div");

let essai = 4;
let html = "";
buttonElement.addEventListener("click", () => {
  const valid = /^\d+$/.test(userNumber.value);

  if (!valid) {
    html = `
      <p class="result-bad">
        Veuillez entrer un nombre valide.
      </p>
    `;
    resultElement.innerHTML = html;
  }

  if (userNumber.value == number) {
    html = `
      <p class="result-good">
        Bravo ! Le nombre a deviné était bien ${number}. 
      </p>
      <p class="result-good">
        Vous l'avez réussi en ${5 - essai} essai${5 - essai > 1 ? "s" : ""}.
      </p>
    `;
    userNumber.value = "";
    resultElement.innerHTML = html;
    restartElement.innerHTML =
      "<button class='restart-button js-restart-button'>Recommencer</button>";
  } else if (userNumber.value != number && essai == 0) {
    html = `
      <p class="result-bad">
        Désolé ! Vous n'avez pas trouvé le bon nombre. 
      </p>
      <p class="result-bad">
        Le nombre à deviner était ${number}
      </p>
    `;

    resultElement.innerHTML = html;
    userNumber.value = "";
    restartElement.innerHTML =
      "<button class='restart-button js-restart-button'>Recommencer</button>";
  } else if (userNumber.value < number && userNumber.value != "") {
    essai -= 1;
    html = `
      <p class="">
        Le nombre est plus grand que ${userNumber.value} 
      </p>
    `;

    resultElement.innerHTML = html;
    userNumber.value = "";
  } else if (userNumber.value > number && userNumber.value != "") {
    essai -= 1;
    html = `
      <p class="">
        Le nombre est plus petit que ${userNumber.value} 
      </p>
    `;

    resultElement.innerHTML = html;
    userNumber.value = "";
  }

  document.querySelector(".js-restart-button").addEventListener("click", () => {
    essai = 4;
    resultElement.innerHTML = "";
    number = Math.floor(Math.random() * 100);
  });
});

//desabilitar o bloco de resultados.
document.querySelector(".result").classList.add("off");

function palindromos(event) {
  event.preventDefault();

  //pegando valores dos inputs
  let min = document.getElementById("firstNumber").value;
  let max = document.getElementById("secondNumber").value;

  document.querySelector(".result").classList.remove("off");

  let group = [];

  for (min; min <= max; min++) {
    let str = min.toString().split("");
    let revert = str.reverse();

    if (revert.join("") == min) {
      group.push(min);
    }
  }

  const div = document.querySelector(".result p");

  return div.innerText = group;
}


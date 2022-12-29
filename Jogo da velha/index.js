const btnCall = document.querySelectorAll(".bt");
const win = document.querySelector("#win");
const reset = document.querySelector("#reset");
let mode = "X";
let l1 = [];
let l2 = [];
let l3 = [];
let veri;

for (let i = 0; i < 3; i++) {
  l1.push(btnCall[i]);
}
for (let i = 3; i < 6; i++) {
  l2.push(btnCall[i]);
}
for (let i = 6; i < 9; i++) {
  l3.push(btnCall[i]);
}

const lista = [l1, l2, l3];
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    lista[i][j].onclick = function () {
      if (mode == "X") {
        if (lista[i][j].innerHTML == "O" || lista[i][j].innerHTML == "X") {
          window.alert("Local inválido");
          return;
        }
        lista[i][j].innerHTML = "X";
        veri = verificar(mode);
        if (veri == 1) {
          win.innerHTML = "Xis ganhou";
          mode = "neutro";
        } else mode = "O";
      } else if (mode == "O") {
        if (lista[i][j].innerHTML == "O" || lista[i][j].innerHTML == "X") {
          window.alert("Local inválido");
          return;
        }
        lista[i][j].innerHTML = "O";
        veri = verificar(mode);
        if (veri == 1) {
          win.innerHTML = "Bolas ganhou";
          mode = "neutro";
        } else mode = "X";
      }
    };
  }
}

function verificar(mod) {
  let cont = 0;

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (lista[i][j].innerHTML == mod) {
        cont++;
      } else {
        break;
      }
    }
    if (cont == 3) {
      return 1;
    } else cont = 0;
  }
  cont = 0;

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (lista[j][i].innerHTML == mod) {
        cont++;
      } else {
        break;
      }
    }
    if (cont == 3) {
      return 1;
    } else cont = 0;
  }
  cont = 0;

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (lista[j][i].innerHTML == mod && i == j) {
        cont++;
      }
    }
  }
  if (cont == 3) {
    return 1;
  }
  cont = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (lista[j][i].innerHTML == mod && i + j == 2) {
        cont++;
      }
    }
  }
  if (cont == 3) {
    return 1;
  }
  return 0;
}

reset.onclick = function () {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      lista[i][j].innerHTML = " ";
      mode = "X";
      win.innerHTML = " ";
    }
  }
};

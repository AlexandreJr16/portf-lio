let mode = "neutro";
const text = document.querySelector("#text");
const adi = document.querySelector("#adicionar");
const deletar = document.querySelector("#deletar");
const concluir = document.querySelector("#concluir");
const lista = document.querySelector("#lista");
const modo = document.querySelector("#modo");

deletar.onclick = function () {
  if (mode == "deletar") {
    mode = "neutro";
    modo.innerHTML = `modo: ${mode}`;
  } else {
    mode = "deletar";
    modo.innerHTML = `modo: ${mode}`;
  }
};
concluir.onclick = function () {
  if (mode == "concluir") {
    mode = "neutro";
    modo.innerHTML = `modo: ${mode}`;
  } else {
    mode = "concluir";
    modo.innerHTML = `modo: ${mode}`;
  }
};

adi.onclick = function () {
  const novoDo = text.value;
  const li = document.createElement("li");
  const nodeTexto = document.createTextNode(novoDo);
  li.appendChild(nodeTexto);
  lista.appendChild(li);
  addBtn();
  text.value = "";
};

function addBtn() {
  const dos = document.getElementsByTagName("li");

  for (i = 0; i < dos.length; i++) {
    dos[i].onclick = function () {
      if (mode == "deletar") {
        this.remove();
      }
      if (mode == "concluir") {
        this.classList.add("concluido");
      }
    };
  }
}
addBtn();

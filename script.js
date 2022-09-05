const inputTexto = document.querySelector(".input-texto");
const mensaje = document.querySelector(".mensaje");

//La letra "a" es convertida para "ai"
//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

function btnEncriptar() {
  const textoEncriptado = encriptar(inputTexto.value);
  mensaje.value = textoEncriptado;
  mensaje.style.backgroundImage = "none";
  document.getElementById("text").style.display = "none";
  document.getElementById("msj").style.display = "none";
  document.getElementById("copy").style.display = "show";
  document.getElementById("copy").style.display = "inherit";
  inputTexto.value = "";
}

const matrizCodigo = [
  ["a", "ai"],
  ["e", "enter"],
  ["i", "imes"],
  ["o", "ober"],
  ["u", "ufat"],
];

function encriptar(string) {
  stringEncriptada = string.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringEncriptada.includes(matrizCodigo[i][0])) {
      stringEncriptada = stringEncriptada.replaceAll(
        matrizCodigo[i][0],
        matrizCodigo[i][1].toUpperCase()
      );
    }
  }
  return stringEncriptada.toLowerCase();
}

function btnDesencriptar() {
  const textoEncriptado = desencriptar(inputTexto.value);
  mensaje.value = textoEncriptado;
  mensaje.style.backgroundImage = "none";
  document.getElementById("text").style.display = "none";
  document.getElementById("msj").style.display = "none";
  document.getElementById("copy").style.display = "show";
  document.getElementById("copy").style.display = "inherit";
  inputTexto.value = "";
}

function desencriptar(string) {
  stringDesencriptada = string.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringDesencriptada.includes(matrizCodigo[i][1])) {
      stringDesencriptada = stringDesencriptada.replaceAll(
        matrizCodigo[i][1],
        matrizCodigo[i][0].toUpperCase()
      );
    }
  }
  return stringDesencriptada.toLowerCase();
}

function copiar() {
  mensaje.select();
  navigator.clipboard.writeText(mensaje.value);
  mensaje.value = "";
  alert("Texto copiado");
}

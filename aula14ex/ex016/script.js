function contar() {
  inicio = document.getElementById('numeroI');
  fim = document.getElementById('numeroF');
  res = document.getElementById('res');
  passo = document.getElementById('passo');
  if (inicio.value == 0 || fim.value == 0 || inicio.value > fim.value) {
    alert(`Impossível efetuar o cálculo!`);
  }
  I = Number(inicio.value);
  F = fim.value;
  P = Number(passo.value);
  do {
    res.innerHTML += `${I} &#128073;`;
    I += P;
  } while (I < F);
  res.innerHTML += '&#127937';
}

function contar() {
  inicio = document.getElementById('numeroI');
  fim = document.getElementById('numeroF');
  res = document.getElementById('res');
  passo = document.getElementById('passo');
  if (inicio.value == 0 || fim.value == 0) {
    //alert(`Impossível efetuar o cálculo!`);
    res.innerHTML = 'Ipossível contar!';
  } else {
    res.innerHTML = 'Contando: ';
    I = Number(inicio.value);
    F = Number(fim.value);
    P = Number(passo.value);
    if (P <= 0) {
      alert('Passo inválido! Considerando PASSO 1');
      P = Number(1);
    }
    if (I < F) {
      while (I <= F) {
        res.innerHTML += `${I} &#128073;`;
        I += P;
      }
    } else {
      while (I >= F) {
        res.innerHTML += `${I} &#128073;`;
        I -= P;
      }
    }
    res.innerHTML += '&#127937';
  }
}

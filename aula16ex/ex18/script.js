let num = [];
function adicionar() {
  numero = document.getElementById('numero');
  tab = document.getElementById('seltab');
  number = Number(numero.value);
  if (number == '' || number > 100 || number < 1) {
    alert('Por favor digite um número entre 1 e 100');
  } else {
    teste = num.indexOf(`${number}`);
    if (teste == -1) {
      num.push(numero.value);
      item = document.createElement('option');
      item.text = `Valor ${number} adicionado!`;
      item.value = `tab${number}`;
      tab.appendChild(item);
    } else {
      alert(
        `Já existe esse numero neste array, por favor digite outro numero!`
      );
    }
  }
}

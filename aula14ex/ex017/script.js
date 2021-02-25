function tabuada() {
  numero = document.getElementById('numero');
  //res = document.getElementById('res');
  tab = document.getElementById('seltab');
  num = numero.value;

  if (num == '') {
    alert('Por favor digite um número');
  } else {
    //res.innerHTML = '';
    tab.innerHTML = '';
    for (c = 0; c <= 10; c++) {
      item = document.createElement('option');
      item.text = `${num} x ${c} = ${num * c}`;
      item.value = `tab${c}`;
      tab.appendChild(item);

      //total = num * c;
      //res.innerHTML += `${num} X ${c} = ${total} <br>`;
    }
  }
}

numero = document.getElementById('numero');
tab = document.getElementById('seltab');
let num = [];
function adicionar() {
  number = Number(numero.value);
  if (number == '' || number > 100 || number < 1) {
    alert('Por favor digite um número entre 1 e 100');
  } else {
    teste = num.indexOf(`${number}`);
    if (teste == -1) {
      num.push(numero.value);
      item = document.createElement('option');
      item.text = `Valor ${number} adicionado!`;
      //item.value = `tab${number}`;
      tab.appendChild(item);
      res.innerHTML = '';
    } else {
      alert(
        `Já existe esse numero neste array, por favor digite outro numero!`
      );
    }
  }
  numero.value = '';
  numero.focus();
}
function finalizar() {
  if (num.length == 0) {
    alert('Adicione valores antes de finalizar!');
  } else {
    res = document.getElementById('res');
    pa = document.createElement('p');
    classi = num.sort(function (a, b) {
      return a - b;
    });
    let maior = num[0];
    let menor = num[0];
    soma = 0;
    media = 0;
    for (let pos in num) {
      soma += Number(num[pos]);
      media = soma / num.length;
      if (num[pos] > maior) {
        maior = num[pos];
      } else if (num[pos] < menor) {
        menor = num[pos];
      }
    }

    res.innerHTML = '';
    res.innerHTML += `<p>Ao todo, temos ${num.length} números cadastrados.</p>`;
    res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`;
    res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`;
    res.innerHTML += `<p>Somando todos os valores temos ${soma}.</p>`;
    res.innerHTML += `<p>Somando todos os valores temos ${media}.</p>`;

    /*
    maior = classi.length - 1;
    pa.innerHTML = `Ao todo, temos ${num.length} números cadastrados <br>
  O maior valor informado foi ${num[maior]} <br> O menor valor informado foi ${
      num[maior - maior]
    } <br> Somando todos os valores, temos `;
    res.appendChild(pa);
    */
  }
}

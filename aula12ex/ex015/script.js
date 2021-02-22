function verificar() {
  data = new Date();
  ano = data.getFullYear();
  fano = document.getElementById('txtano');
  res = document.querySelector('#res');
  img = document.createElement('img');
  img.setAttribute('id', 'foto');
  if (fano.value.length == 0 || fano.value > ano) {
    alert('Verifique os dados e tente novamente!');
  } else {
    fsex = document.getElementsByName('radsex');
    idade = ano - Number(fano.value);
    genero = '';
    if (fsex[0].checked) {
      genero = 'Homem';
      if (idade >= 0 && idade < 10) {
        //Criança
        img.setAttribute('src', 'bebe_m.png');
      } else if (idade < 21) {
        //Jovem
        img.setAttribute('src', 'homem_j.png');
      } else if (idade < 50) {
        //Adulto
        img.setAttribute('src', 'homem_a.png');
      } else {
        //Idoso
        img.setAttribute('src', 'homem_v.png');
      }
    } else {
      genero = 'Mulher';
      if (idade >= 0 && idade < 10) {
        //Criança
        img.setAttribute('src', 'bebe_f.png');
      } else if (idade < 21) {
        //Jovem
        img.setAttribute('src', 'mulher_j.png');
      } else if (idade < 50) {
        //Adulto
        img.setAttribute('src', 'mulher_a.png');
      } else {
        //Idoso
        img.setAttribute('src', 'mulher_v.png');
      }
    }
    res.style.textAlign = 'center';
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
    res.appendChild(img);
  }
}

function carregar() {
  msg = document.getElementById('msg');
  img = document.getElementById('imagem');
  data = new Date();
  hora = data.getHours();
  //hora = 18;
  msg.innerHTML = `Agora são ${hora} horas.`;
  if (hora >= 0 && hora < 12) {
    img.src = 'manha.png';
    document.body.style.background = '#fdd8aa';
  } else if (hora >= 12 && hora < 18) {
    img.src = 'tarde.png';
    document.body.style.background = '#c68d56';
  } else {
    img.src = 'noite.png';
    document.body.style.background = '#052951';
  }
}

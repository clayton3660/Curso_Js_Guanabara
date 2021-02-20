agorah = new Date();
hora = agorah.getHours();
minuto = agorah.getMinutes();
segundo = agorah.getSeconds();
console.log(
  `Agora são exatamente ${hora} horas e ${minuto} minutos e ${segundo} segundos.`
);
if (hora < 12) {
  console.log('Boa tarde!');
} else if (hora <= 18) {
  console.log('Boa tarde!');
} else {
  console.log('Boa noite!');
}

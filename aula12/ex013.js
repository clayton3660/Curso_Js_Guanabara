agora = new Date();
diaSem = agora.getDay();

switch (diaSem) {
  case 0:
    console.log('Domingo');
    break;
  case 1:
    console.log('Segunda-feira');
    break;
  case 2:
    console.log('Terça-feira');
    break;
  case 3:
    console.log('quarta-feira');
    break;
  case 4:
    console.log('quinta-feira');
    break;
  case 5:
    console.log('sexta-feira');
    break;
  case 6:
    console.log('sábado');
    break;
  default:
    console.log('[ERRO] Dia inválido');
    break;
}

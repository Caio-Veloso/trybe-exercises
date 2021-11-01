/* 5) Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro. */

/* Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
Um ângulo será considerado inválido se não tiver um valor positivo. */

const angleA = 30;
const angleB = 60;
const angleC = 90; 

const sumOfAngles = angleA + angleB + angleC

if(angleA < 0 || angleB < 0 || angleC < 0) {
  console.log("valor não pode ser negativo!")
}
else if(sumOfAngles !== 180) {
  console.log(false);
}
else {
  console.log(true);
}
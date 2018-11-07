import { multiply, multiplyWithx } from './lib';
console.log(multiply(10,10)); // 100
console.log(multiplyWithx(5)); //25

document.getElementById("kalkulasi").addEventListener('click', function() {
    document.getElementById("hasil").innerHTML = multiply(10, 10);
  });
document.getElementById("kalkulasi2").addEventListener('click', function(){
    document.getElementById('hasil2').innerHTML = multiplyWithx(5);
})
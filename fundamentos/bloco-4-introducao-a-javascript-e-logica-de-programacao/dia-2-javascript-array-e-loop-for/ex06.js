let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let OddNumbers = 0

for (let index = 0; index < numbers.length; index++) {
  if(numbers[index] %2 !==0 ) {
    OddNumbers += 1;
  }
  
}
console.log(OddNumbers)
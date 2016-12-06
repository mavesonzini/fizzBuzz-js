function FizzBuzz() {}

FizzBuzz.prototype.isDivisibleByThree = function(number) {
  return number % 3 === 0;
}

FizzBuzz.prototype.isDivisibleByFive = function(number){
  return number % 5 === 0;
}

FizzBuzz.prototype.isDivisibleByFifteen = function(number){
  return this.isDivisibleByThree(number) && this.isDivisibleByFive(number);
}

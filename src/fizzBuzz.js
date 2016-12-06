function FizzBuzz() {}

FizzBuzz.prototype.isDivisibleByThree = function(number) {
  return number % 3 === 0;
}

FizzBuzz.prototype.isDivisibleByFive = function(){
  return true;
};

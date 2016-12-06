describe("FizzBuzz", function() {
  var fizzbuzz;

  beforeEach(function() {
    fizzbuzz = new FizzBuzz();
  });

  it("should be able to print fizz if number is divisible by 3", function() {
    expect(fizzbuzz.isDivisibleByThree(3)).toBeTruthy();
  });
});

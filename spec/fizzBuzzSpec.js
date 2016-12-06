describe("FizzBuzz", function() {
  var fizzbuzz;

  beforeEach(function() {
    fizzbuzz = new FizzBuzz();
  });

  it("should be able to print fizz if number is divisible by 3", function() {
    expect(fizzbuzz.isDivisibleByThree(3)).toBeTruthy();
  });

  it("should test for indivisibility by 3", function() {
    expect(fizzbuzz.isDivisibleByThree(4)).toBeFalsy();
  });

  it("should test for divisibility by 5", function() {
    expect(fizzbuzz.isDivisibleByFive(5)).toBeTruthy();
  });

  it("should not be divisible by 5", function() {
    expect(fizzbuzz.isDivisibleByFive(9)).toBeFalsy();
  });
});

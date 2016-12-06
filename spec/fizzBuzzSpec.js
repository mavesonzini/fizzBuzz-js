describe("FizzBuzz", function() {
  var fizzbuzz;

  beforeEach(function() {
    fizzbuzz = new FizzBuzz();
  });

  it("should be test for divisibility by 3", function() {
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

  it("should test for divisibility by both 3 and 5", function(){
    expect(fizzbuzz.isDivisibleByFifteen(15)).toBeTruthy();
  });

  it("should not be divisible by fifteen", function(){
    expect(fizzbuzz.isDivisibleByFifteen(4)).toBeFalsy();
  });

  it("should fizz for three", function(){
    expect(fizzbuzz.play(3)).toEqual("fizz");
  });
});

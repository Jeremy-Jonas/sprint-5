//Exercise 1

for (let line = "#"; line.length < 8; line += "#")
  console.log(line);

//Exercise 2

for (let num = 1; num <= 100; num = num + 1) {
    if (num % 5 == 0 && num % 3 == 0) {
      console.log("FizzBuzz");
      }
    else if (num % 5 == 0 && num % 3 !== 0) {
      console.log("Buzz");
      }
    else if (num % 3 == 0) {
      console.log("Fizz");
      }
    else {
      console.log(num);
    }
  }

  //Exercise 3

  
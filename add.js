let a = 1;
while(a < 100) {

    if (a % 3 == 0 && a % 5 == 0) {
        console.log( a + " = " + "FizzBuzz");
    }
    else if (a % 3 == 0) {
        console.log( a + " = " + "Fizz");
    }
    else if (a % 5 == 0) {
        console.log( a + " = " + "Buzz");
    }
    else {
        console.log(a);
    }
    a++;
}

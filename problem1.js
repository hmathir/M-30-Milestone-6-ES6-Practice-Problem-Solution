/* 1) Write an arrow function that will take 3 parameters, will multiply
the parameters and will return the result.*/
const threeParameters = (a,b,c) => a * b * c;
console.log(threeParameters(2,3,4));


/*2) Write the following sentence in three lines and print the result:
I am a web developer. I love to code. I love to eat biryani.*/
const threeLine = `I am a web developer.
I love to code.
I love to eat biriyani`;
console.log(threeLine);


/* 3) Write an arrow function that will take 2 parameters: One parameter
will come from you and the other parameter will be a default
parameter. Add these two parameters and return the result. */
const twoPara = (a , b = ' You!') => a + b;
console.log(twoPara('I Love'));

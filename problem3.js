/*Write an arrow function where it will do the following:
a) Square each array element
b) Calculate the sum of the squared elements
c) Return the average of the sum of the squared elements
Print the result. */

const arrayItems = [1,2,3,4,5];

const otherArrowFunction = array => {
    let sum = 0;
    for(i = 0; i < array.length; i++){
        const squ = Math.pow(array[i] , 2);
        sum = sum + squ;
    }
    const average = sum / array.length;
    return average;
}
console.log(otherArrowFunction(arrayItems));
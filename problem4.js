/*Write an arrow function where it will do the following:
a) It will take two array inputs
b) Combine the two arrays and assign them in a new array
c) Find the maximum number from the new array and return the
result
Print the result.*/

arrayOne = [1,4,5,7,2,36,7,74,434];
arrayTwo = [32,424,234,54,233,235,21,557];
const moreArrowFunction = (firstArray, secondArray) => {
    const newArray = [...firstArray,...secondArray];
    const maximum = Math.max(...newArray);
    return maximum;
}
console.log(moreArrowFunction(arrayOne, arrayTwo));
/**

Question #1 -

Challenge zero

 The below function does not work. The variable
 twoPlusTwo gets set to `undefined`. Refactor
 the function to make it work.

**/



//--- ANSWER TO CHALLENGE ZERO ---
//
// function addNumbers(numberA, numberB) {
//     return numberA + numberB;
// }
//
// var twoPlusTwo = addNumbers(2, 2)
//
// console.assert(twoPlusTwo === 4)




/** Question #2
For a given 2D vector described by cartesian coordinates of its initial point
and terminal point in the following format: [[x1, y1], [x2, y2]], your function
must return this vector's length presented as a float.
**/


//--- ANSWER TO QUESTION 2 ---


// function vectorLength([[x1, y1],[x2, y2]]){
//   return Math.sqrt(Math.pow((x1-x2),2) + Math.pow((y1-y2),2))
// }
//
// console.assert(vectorLength([[0, 1],[0, 0]]) === 1)
// console.assert(vectorLength([[0, 3],[4, 0]]) === 5)
// console.assert(vectorLength([[1, -1],[1, -1]]) === 0)



// --- QUESTION #3 ---
// Fill in what the values above should be to make the tests pass and explain why
// the result is what it is. What do you think is occurring in the code
// [10, 20, 30, 40][1, 2, 3]?


// --- ANSWER TO QUESTION 3 ---
//
// var myVarOne = [10, 20, 30, 40][1, 2, 3]
// var myVarTwo = [10, 20, 30, 40][3, 2, 1]
//
// console.assert(myVarOne === 40)
// console.assert(myVarTwo === 20)
//
//   ---  Explaination ---
// The second array decides which number in the first array it will print out.
// As it is written, 40 and 20 will be printed out. It chose the last number in
// the 2nd array. Why? I have no idea, but it did.
//
// "3" in the second array is "40" in the first array.
//

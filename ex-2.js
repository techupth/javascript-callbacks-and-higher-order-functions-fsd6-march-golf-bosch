//Exercise #2: At Least Five Function

function atLeastFive(array, operation) {
  // Start coding here
  return operation(array) >= 5
    ? console.log("ผ่านเกณฑ์ ✅")
    : console.log("ไม่ผ่านเกณฑ์ ❌");
}

const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

const isOver70 = (array) => array.filter((score) => score > 70).length;

// Using `atLeastFive` function here

let scoreRoom1Result = atLeastFive(studentScoresRoom1, isOver70);
let scoreRoom2Result = atLeastFive(studentScoresRoom2, isOver70);
let scoreRoom3Result = atLeastFive(studentScoresRoom3, isOver70);

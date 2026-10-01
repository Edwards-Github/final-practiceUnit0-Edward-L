// Task 1: User creates a workout routine
// Module: Building Arrays
let mondayWorkout = [
  "Barbell Bench Press",
  "Machine Seated Leg Press",
  "Cable Lat Pulldown",
  "Seated Hamstring Curl",
  "Hanging leg raise",
  "Cable Lateral Raise",
];
console.log(`Monday workout: ${mondayWorkout}\n`); // Module: Stringing Characters Together

// Task 2: User can edit the workout
// Module: Using Arrays
mondayWorkout.splice(5, 1, "Push-up");
console.log(`Updated Monday workout: ${mondayWorkout}\n`); // Module: Stringing Characters Together

// Task 3: Keep track of diet
// Module: Values, Data Types, and Operations
let breakfastCalories = 350;
let afternooonCalories = 550;
let dinnerCalories = 600;
let totalCalories = breakfastCalories + afternooonCalories + dinnerCalories;
console.log(`Total calories today: ${totalCalories}\n`);

// Task 4: Safeguard against invalid input
// Module Control Structures and Logic
const readline = require("readline-sync");
let numReps = readline.questionInt(
  "Enter negative number to see safeguard otherwise just enter a positive number: ",
);

// Could use this to loop user until user enters valid value
// while (numReps < 0) {
//   console.log(`You have entered ${numReps} reps which is an invalid input.\n`);
//   numReps = readline.questionInt(
//     "Please enter a valid (0 or greater) value otherwise you will be prompted to enter again: ",
//   );
// }

// Module Control Structures and Logic
if (numReps < 0) {
  console.log(`You have entered ${numReps} reps which is an invalid input.\n`);
} else {
  console.log(
    `You have successfully logged ${numReps} reps to your workout.\n`,
  );
}

// Task 5: Storing weekly data
let weeklyData = [
  // [Day, did you workout?, totalCalories]
  ["Monday", true, 600],
  ["Tuesday", false, 400],
  ["Wednesday", true, 600],
  ["Thursday", false, 500],
  ["Friday", true, 700],
  ["Saturday", false, 400],
  ["Sunday", false, 400],
];

console.log("Weekly data summary");
console.log("--------------------");
// Module: Working With Loops
for (let row = 0; row < weeklyData.length; row++) {
  for (let col = 0; col < weeklyData[0].length; col++) {
    console.log(weeklyData[row][col]);
  }
}

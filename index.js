// const csv =
//   "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26 ";

// let cell = "";
// let row = "";
// let par_arr = [];
// let arr = [];

// for (i = 0; i < csv.length; i++) {
//   if (csv[i] != ",") {
//     cell += csv[i];
//     // console.log(cell);
//   }
//   if (csv[i] === ",") {
//     row += `${cell} `;
//     cell = "";
//   }
//   if (csv[i] === "\n") {
//     row += cell;
//     console.log(row);
//     row = "";
//     cell = "";
//   }
//   if (i === csv.length - 1) {
//     row += cell;
//     console.log(row);
//   }
// }

const csvData =
  "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
// This is just a rough outline of the basic structure to implement.
//Feel free to use snippets or make your own changes since I have this project separate from my main
console.log(csvData);
// Step 1: Parse the CSV Data

//split into lines
const rows = csvData.split("\n");

//Create array for data
const twoDArray = [];

//Iterate through each line
for (const row of rows) {
  const values = row.split(",");
  //Add values as new row
  twoDArray.push(values);
}
// console.log(twoDArray);
// Step 2: Transform Data into Array of Objects

const newArr = [];

for (let i = 1; i < twoDArray.length; i++) {
  const obj = {};
  for (let j = 0; j < twoDArray[0].length; j++) {
    obj[twoDArray[0][j].toLowerCase()] = twoDArray[i][j];
  }
  newArr.push(obj);
}

// console.log(newArr);
// remove last part of array
newArr.pop();
//insert new data into index 1
newArr.splice(1, 0, {
  id: "48",
  name: "Barry",
  occupation: "Runner",
  age: "25",
});

// add new data to the end of array
newArr.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });

// console.log(newArr[3].age);
// console.log(newArr);

// Add up the average age of the array
// console.log([newArr[i].age]);
let sum = 0;
for (i = 0; i < newArr.length; i++) {
  sum += Number(newArr[i].age);
}
let avr = sum / newArr.length;
// console.log(avr);

//turn back into csv format
let returnCsv = twoDArray[0].join(",") + `\\n`;
for (const person of newArr) {
  const values = Object.values(person);
  returnCsv += values.join(",") + `\\n`;
}
console.log(returnCsv);

// console.log(csvContent);

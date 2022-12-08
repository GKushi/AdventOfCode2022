import * as fs from 'fs';

let elfs: number[] = [];
const data = fs.readFileSync(`${__dirname}/input.txt`, 'utf8');

let lines = data.split('\r\n');
let sum = 0;
for (let i = 0; i < lines.length; i++) {
  if (lines[i]){
    sum += parseInt(lines[i]);
  } else {
    elfs.push(sum)
    sum = 0;
  }
};

let totalCalories = 0;

for(let top3 = 0; top3 < 3; top3++){
  let maxCalories = elfs.reduce((prev, current) => {
    return (prev > current) ? prev : current;
  });
  let indexOfMax = elfs.indexOf(maxCalories);
  elfs.splice(indexOfMax, 1);
  totalCalories += maxCalories;
}
console.log(totalCalories);
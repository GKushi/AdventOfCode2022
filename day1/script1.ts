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
// console.log(elfs);

const maxCalories = elfs.reduce((prev, current) => {
    return (prev > current) ? prev : current
});

console.log(maxCalories);
import * as fs from "fs";

const data = fs.readFileSync(`${__dirname}/input.txt`, "utf8");

const lines = data.split("\n");

const crates: string[][] = [[], [], [], [], [], [], [], [], []];

// load data into array of arrays
for (let i = 7; i >= 0; i--) {
  let line = lines[i];
  for (let j = 1; j < line.length; j += 4) {
    if (line.charAt(j) !== " ") {
      crates[(j - 1) / 4].push(line.charAt(j));
    }
  }
}

// move function
const move = (quantity: string, fromArr: string, toArr: string): void => {
  let quant = parseInt(quantity);
  let from = parseInt(fromArr) - 1;
  let to = parseInt(toArr) - 1;
  while (quant) {
    crates[to].push(crates[from][crates[from].length - 1]);
    crates[from].pop();
    quant--;
  }
};

// using move
for (let i = 10; i < lines.length; i++) {
  const instruction = lines[i].split(" ");
  move(instruction[1], instruction[3], instruction[5]);
}

let result: string = "";
// printing result
crates.forEach((e) => {
  result += e[e.length - 1];
});

console.log(result);

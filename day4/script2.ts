import * as fs from 'fs';

const data = fs.readFileSync(`${__dirname}/input.txt`, 'utf8');

const allPairs = data.split('\n');

const isOverlaping = (pair:string):boolean => {
    const firstElf = pair.split(",")[0].split("-").map(val=>parseInt(val));
    const secondElf = pair.split(",")[1].split("-").map(val=>parseInt(val));

    if (firstElf[0]<=secondElf[0] && firstElf[1]>=secondElf[0]) return true;
    if (secondElf[0]<=firstElf[0] && secondElf[1]>=firstElf[0]) return true;

    return false;
};

let containingSections:number = 0;

for(let i=0;i<allPairs.length;i++){
    if(isOverlaping(allPairs[i])) containingSections++;
};

console.log(containingSections);
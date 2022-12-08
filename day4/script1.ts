import * as fs from 'fs';

const data = fs.readFileSync(`${__dirname}/input.txt`, 'utf8');

const allPairs = data.split('\n');

const isContaining = (pair:string):boolean => {
    const firstElf = pair.split(",")[0].split("-").map(val=>parseInt(val));
    const secondElf = pair.split(",")[1].split("-").map(val=>parseInt(val));

    if(firstElf[0]>=secondElf[0]){
        if(firstElf[1]<=secondElf[1]){
            return true;
        }
    }
    if(firstElf[0]<=secondElf[0]){
        if(firstElf[1]>=secondElf[1]){
            return true;
        }
    }

    return false;
};

let containingPairs:number = 0;

for(let i=0;i<allPairs.length;i++){
  if (isContaining(allPairs[i])) containingPairs++;
};

console.log(containingPairs);
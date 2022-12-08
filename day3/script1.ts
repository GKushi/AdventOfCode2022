import * as fs from 'fs';

const data = fs.readFileSync(`${__dirname}/input.txt`, 'utf8');

const rucksacks = data.split('\n');
const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

const calcRucksack = (rucksack:string):number => {
  const firstHalf = rucksack.slice(0,rucksack.length/2);
  const secondHalf = rucksack.slice(rucksack.length/2);
  
  let rucksackValue = 0;
  for(let i=0; i<alphabet.length;i++){
    if(firstHalf.split(alphabet[i]).length - 1>0 && secondHalf.split(alphabet[i]).length - 1>0){
      rucksackValue += i+1;
    };
  }
  return rucksackValue;
};

let points:number = 0;

for(let i=0;i<rucksacks.length;i++){
  points += calcRucksack(rucksacks[i]);
};

console.log(points);
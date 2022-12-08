import * as fs from 'fs';

const data = fs.readFileSync(`${__dirname}/input.txt`, 'utf8');

const rucksacks = data.split('\n');
const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

const calcGroupRucksacks = (first:string,second:string,third:string):number => {
  
  let groupValue = 0;
  for(let i=0; i<alphabet.length;i++){

    if(first.split(alphabet[i]).length - 1>0 && second.split(alphabet[i]).length - 1>0 && third.split(alphabet[i]).length - 1>0){
        groupValue += i+1;
      };
  }
  return groupValue;
};

let points:number = 0;

for(let i=2;i<rucksacks.length;i+=3){
  points += calcGroupRucksacks(rucksacks[i-2],rucksacks[i-1],rucksacks[i]);
};

console.log(points);
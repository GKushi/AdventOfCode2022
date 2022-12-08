import * as fs from 'fs';

const data = fs.readFileSync(`${__dirname}/input.txt`, 'utf8');

let rounds = data.split('\n');

const moveType = [
  {letter:'A', index:1},
  {letter:'X', index:1},
  {letter:'B', index:2},
  {letter:'Y', index:2},
  {letter:'C', index:3},
  {letter:'Z', index:3}
];

const calcRound = (round:string):number => {
  let opponent = round.charAt(0);
  let me = round.charAt(2);
  let opponentIndex = moveType.find(o => o.letter === opponent)!.index;
  let meIndex = moveType.find(o => o.letter === me)!.index;
  const win = 6;
  const lose = 0;
  const draw = 3;
  
  switch(meIndex) { 
   case 2: { 
      // console.log('draw');
     return draw+opponentIndex;
   } 
   case 1: { 
      // console.log('lose');
      switch(opponentIndex){
         case 1:{
           return lose+3;
         }
        case 2:{
          return lose+1;
        }
        case 3:{
          return lose+2;
        }
      }
      break; 
   }
    case 3: {
      // console.log('win');
      switch(opponentIndex){
         case 1:{
           return win+2;
         }
        case 2:{
          return win+3;
        }
        case 3:{
          return win+1;
        }
      }
      break;
    }
}
  return 0;
};

let points:number = 0;
for(let i=0;i<rounds.length;i++){
  points += calcRound(rounds[i]);
}
console.log(points);
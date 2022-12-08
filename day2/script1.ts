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
  if(opponentIndex===meIndex){
    // console.log('draw');
    return draw+meIndex;
  } else if(opponentIndex===1 && meIndex===2){
    // console.log('win');
    return win+meIndex;
  } else if(opponentIndex===2 && meIndex===1){
    // console.log('lose');
    return lose+meIndex;
  } else if(opponentIndex===1 && meIndex===3){
    // console.log('lose');
    return lose+meIndex;
  } else if(opponentIndex===3 && meIndex===1){
    // console.log('win');
    return win+meIndex;
  } else if(opponentIndex===2 && meIndex===3){
    // console.log('win');
    return win+meIndex;
  } else if(opponentIndex===3 && meIndex===2){
    // console.log('lose');
    return lose+meIndex;
  };
  return 0;
};

let points:number = 0;
for(let i=0;i<rounds.length;i++){
  points += calcRound(rounds[i]);
}
console.log(points);
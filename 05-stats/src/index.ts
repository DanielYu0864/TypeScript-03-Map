import { CsvFileReader } from './CsvFileReader';
import { MatchResult } from './MatchResult';
//? step to get data from csv file
//? Load (node std lib) -> prase -> analyze -> report

//* install nodes ts instead of fs EX: $ npm i @types/node
// step 1: load the data from csv file to string
const reader = new CsvFileReader('football.csv');
reader.read();
// console.log(reader);
//* bad code version
//* count how many times that the team 'Man United' win


let manUnitedWins: number = 0;

for (let match of reader.data) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
};

console.log('Man United won ' + manUnitedWins + ' games.');
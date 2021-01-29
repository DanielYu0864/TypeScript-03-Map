import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { MatchResult } from './MatchResult';
//? step to get data from csv file
//? Load (node std lib) -> prase -> analyze -> report

//step 1 Create an object that satisfies the 'DataReader' interface
const csvFileReader = new CsvFileReader('football.csv');
//step 2 Create an instance of MatchReader and pass in something satisfying the 'DataReader' interface
const matchReader = new MatchReader(csvFileReader);
matchReader.load();
// matchReader.matches



console.log('Man United won ' + manUnitedWins + ' games.');
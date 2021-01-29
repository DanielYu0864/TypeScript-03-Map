import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { WinsAnalysis } from './analyzers/WinsAnalys';
import { Summary } from './Summary';
//? step to get data from csv file
//? Load (node std lib) -> prase -> analyze -> report

//step 1 Create an object that satisfies the 'DataReader' interface
const csvFileReader = new CsvFileReader('football.csv');

//step 2 Create an instance of MatchReader and pass in something satisfying the 'DataReader' interface
const matchReader = new MatchReader(csvFileReader);
matchReader.load();
//EX matchReader.matches

//step 3 call data
const summary = new Summary(
  new WinsAnalysis('Man United'),
  new ConsoleReport()
);

summary.buildAndPrintReport(matchReader.matches);

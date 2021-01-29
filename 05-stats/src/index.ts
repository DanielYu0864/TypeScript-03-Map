import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { WinsAnalysis } from './analyzers/WinsAnalys';
import { Summary } from './Summary';
import { HTMLReport } from './reportTargets/HTMLReport';
//? step to get data from csv file
//? Load (node std lib) -> prase -> analyze -> report

//step 1 Create an object that satisfies the 'DataReader' interface
//* EX: const csvFileReader = new CsvFileReader('football.csv');

//step 2 Create an instance of MatchReader and pass in something satisfying the 'DataReader' interface
//* EX:
// const matchReader = new MatchReader(csvFileReader);
// matchReader.load();
// matchReader.matches

// step 1 + step 2
const matchReader = MatchReader.fromCsv('football.csv')

//step 3 run data
const summary = Summary.winsAnalysisWithHTMLReport('Man United');
//* equal to the code below
// const summary = new Summary(
//   new WinsAnalysis('Man United'),
//   new HTMLReport()
// );


summary.buildAndPrintReport(matchReader.matches);

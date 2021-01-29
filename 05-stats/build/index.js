"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var Summary_1 = require("./Summary");
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
var matchReader = MatchReader_1.MatchReader.fromCsv('football.csv');
//step 3 run data
var summary = Summary_1.Summary.winsAnalysisWithHTMLReport('Man United');
//* equal to the code below
// const summary = new Summary(
//   new WinsAnalysis('Man United'),
//   new HTMLReport()
// );
summary.buildAndPrintReport(matchReader.matches);

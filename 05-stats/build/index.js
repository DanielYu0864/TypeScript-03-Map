"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var CsvFileReader_1 = require("./CsvFileReader");
var ConsoleReport_1 = require("./reportTargets/ConsoleReport");
var WinsAnalys_1 = require("./analyzers/WinsAnalys");
var Summary_1 = require("./Summary");
//? step to get data from csv file
//? Load (node std lib) -> prase -> analyze -> report
//step 1 Create an object that satisfies the 'DataReader' interface
var csvFileReader = new CsvFileReader_1.CsvFileReader('football.csv');
//step 2 Create an instance of MatchReader and pass in something satisfying the 'DataReader' interface
var matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
//EX matchReader.matches
//step 3 call data
var summary = new Summary_1.Summary(new WinsAnalys_1.WinsAnalysis('Man United'), new ConsoleReport_1.ConsoleReport());
summary.buildAndPrintReport(matchReader.matches);

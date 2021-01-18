"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvFileReader = void 0;
var fs_1 = __importDefault(require("fs"));
var utils_1 = require("./utils");
//* to read .csv file into array of string arrays EX: [['s'], ['t']]
var CsvFileReader = /** @class */ (function () {
    function CsvFileReader(filename) {
        this.filename = filename;
        this.data = []; //* array of MatchDatas
    }
    ;
    CsvFileReader.prototype.read = function () {
        this.data = fs_1.default
            .readFileSync(this.filename, {
            encoding: 'utf-8' /*'utf-8' means return string */
        })
            .split('\n') // step 2: split string into array
            .map(function (row) {
            return row.split(',');
        })
            .map(function (row) {
            return [
                utils_1.dateStringToDate(row[0]),
                row[1],
                row[2],
                parseInt(row[3]),
                parseInt(row[4]),
                row[5],
                row[6]
            ];
        });
    };
    return CsvFileReader;
}());
exports.CsvFileReader = CsvFileReader;

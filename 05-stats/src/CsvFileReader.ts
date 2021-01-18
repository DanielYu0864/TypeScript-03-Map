import fs from 'fs';
import { dateStringToDate } from './utils';
import { MatchResult } from './MatchResult';
//* tuple
type MatchData = [Date, string, string, number, number, MatchResult, string];

//* to read .csv file into array of string arrays EX: [['s'], ['t']]
export class CsvFileReader {
  data: MatchData[] = []; //* array of MatchDatas

  constructor(public filename: string) { };

  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: 'utf-8' /*'utf-8' means return string */
      })
      .split('\n')// step 2: split string into array
      .map((row: string): string[] => { // step 3: split string inside of array to array by ','
        return row.split(',')
      })
      .map((row: string[]): MatchData => {
        return [
          dateStringToDate(row[0]),
          row[1],
          row[2],
          parseInt(row[3]),
          parseInt(row[4]),
          row[5] as MatchResult, //* type assertion: 'H', 'A', 'D'
          row[6]
        ];
      });
  }

}
import fs from 'fs';

//* to read .csv file into array of string arrays EX: [['s'], ['t']]
export abstract class CsvFileReader<T> /* Generics class */ {
  data: T[] = []; //* array of MatchDatas

  constructor(public filename: string) { };

  abstract mapRow(row: string[]): T;
  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: 'utf-8' /*'utf-8' means return string */
      })
      .split('\n')// step 2: split string into array
      .map((row: string): string[] => { // step 3: split string inside of array to array by ','
        return row.split(',')
      })
      .map(this.mapRow);
  }

}
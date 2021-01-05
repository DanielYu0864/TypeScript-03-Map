import faker from 'faker';
import { Mappable } from './CustomMaps';

export class Company implements Mappable {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = 'red'

  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    //! do not do this: this.location.lat -- will getting undefind
    this.location = {
      lat: parseFloat(faker.address.latitude()),  // parseFloat to turn latitude to a number type
      lng: parseFloat(faker.address.longitude())  // parseFloat to turn longitude to a number type
    };
  };

  markerContent(): string {
    return `
      <div>
        <h2>Company Name: ${this.companyName}</h2>
        <p>We are/do ${this.catchPhrase}!</p>
      </div>
      `;
  }
};

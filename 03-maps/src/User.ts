//* use faker npm to create the fake name, compony, and address info: https://www.npmjs.com/package/faker
import faker from 'faker'; //* need to install the type definition file if get the error for import JS library
//! Definitely Typed Naming Scheme $ @types/{libaray name}
import { Mappable } from './CustomMaps';
export class User implements Mappable { //* by implements the Mappable interface can mack sure the type that User class is giving correct
  name: string;
  //! location does not initially set up any value or obj, just giving the types
  location: {
    lat: number;
    lng: number;
  };
  color: string;

  constructor() {
    this.name = faker.name.findName();
    // need to assign location as an object here
    //! do not do this: this.location.lat -- will getting undefind
    this.location = {
      lat: parseFloat(faker.address.latitude()), // parseFloat to turn to a number type
      lng: parseFloat(faker.address.longitude()) // parseFloat to turn to a number type
    };
    this.color = 'green';
  };

  markerContent(): string {
    return `<h2>User Name: ${this.name}</h2>`
  }
}
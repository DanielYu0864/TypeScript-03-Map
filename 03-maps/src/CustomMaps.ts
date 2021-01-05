import { User } from './User';
import { Company } from './Company';
//* Instructions to every other class on how they can be an argument to 'addMarker'
export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
  color: string;
};

//* Create extra CustomMaps class to limited the method from GoogleMaps api to avoid called unused function accidentally
export class CustomMaps {
  // public will be default in the class in TS in this case we do "private" to avoid called from other file
  private googleMap: google.maps.Map;
  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0
      }
    });


  }
  //* couple ways to adding the marker into the map
  //* 1. bad code version by separate two function
  addUserMarker(user: User /* class can be type here */): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: user.location.lat,
        lng: user.location.lng
      }
    });
  }
  addCompanyMarker(company: Company /* class can be type here */): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: company.location.lat,
        lng: company.location.lng
      }
    });
  }
  //* 2. better code: giving type in argument each one of time
  // addMarker(mappable: User | Company/* class can be type here */): void {
  //   new google.maps.Marker({
  //     map: this.googleMap,
  //     position: {
  //       lat: mappable.location.lat,
  //       lng: mappable.location.lng
  //     }
  //   });
  // }
  //* 3. even better: setup type instructions by using interface to make sure all input are match interface 'Mappable'
  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng
      }
    });
    //* show info window when marker clicked
    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent()
      });

      infoWindow.open(this.googleMap, marker);
    });
  };
}
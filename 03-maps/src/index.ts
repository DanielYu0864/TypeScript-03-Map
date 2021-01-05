//* use faker npm to create the fake name, company, and address info: https://www.npmjs.com/package/faker
import { User } from './User';
import { Company } from './Company';
import { CustomMaps } from './CustomMaps';

/*//* to help ts understand the 'google' object install $ npm install @types/googlemaps;
// *EX:
new google.maps.Map(document.getElementById('map'), {
  zoom: 1,
  center: {
    lat: 0,
    lng: 0
   }
});
*/
//*by called the CustomMaps
//* called classes
const user = new User();
const company = new Company();
const customMap = new CustomMaps('map');
//* two ways to adding the marker into the map second one is better
//* 1. bad code version by separate two function
customMap.addUserMarker(user);
customMap.addCompanyMarker(company);
//* 2. 3. better version by suer command argument
customMap.addMarker(user);
customMap.addMarker(company);
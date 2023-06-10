import { Injectable } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';

@Injectable({
  providedIn: 'root'
})
export class LocationserviceService {

  constructor() { }

  getLocation(): Promise<any> {
    return Geolocation.getCurrentPosition();
  }
}

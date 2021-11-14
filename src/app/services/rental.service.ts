import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';

@Injectable({
  providedIn: 'root',
})
export class RentalService {
  constructor(private httpClient: HttpClient) {}
  apiUrl: string = 'https://localhost:44377/api/rentals/';
  getRentalDetails(): Observable<ListResponseModel<Rental>> {
    let newPath = this.apiUrl + 'getrentaldetails';
    return this.httpClient.get<ListResponseModel<Rental>>(newPath);
  }
}

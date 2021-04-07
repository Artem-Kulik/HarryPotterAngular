import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataDto } from 'src/app/models/DataDto';
//import { Dates } from '../models/Dates';

@Injectable({
  providedIn: 'root'
})
export class HarryService {

  constructor(private http: HttpClient) { }

  getCharacters(): Observable<Array<DataDto>>{
    return this.http.get<Array<DataDto>>('http://hp-api.herokuapp.com/api/characters');
  }

  getStudents(): Observable<Array<DataDto>>{
    return this.http.get<Array<DataDto>>('http://hp-api.herokuapp.com/api/characters/students');
  }

  getStaff(): Observable<Array<DataDto>>{
    return this.http.get<Array<DataDto>>('http://hp-api.herokuapp.com/api/characters/staff');
  }
}

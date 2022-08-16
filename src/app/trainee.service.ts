import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TraineeService {

  constructor(private http:HttpClient) { }

  getTraineeList():Observable<any>
  {
    return this.http.get(`http://localhost:9095/wep/api/findAllTrainees`);
  }

  getTrainee(id:string):Observable<any>
  {
    return this.http.get(`http://localhost:9095/wep/api/trainee/${id}`);
  }

  updateTrainee(id:string,value:any):Observable<any>
  {
    return this.http.put(`http://localhost:9095/wep/api/trainees/${id}`,value);
  }

  deleteTrainee(id:string):Observable<any>
  {
    return this.http.delete(`http://localhost:9095/wep/api/trainees/${id}`,{responseType:'text'});
  }
}

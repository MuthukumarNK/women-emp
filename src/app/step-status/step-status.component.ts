import { Component, OnInit } from '@angular/core';
import { Trainee } from '../trainee';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-step-status',
  templateUrl: './step-status.component.html',
  styleUrls: ['./step-status.component.css']
})
export class StepStatusComponent implements OnInit 
{
  trainees:Observable<Trainee[]>|any;
  trainee:Trainee|any;
  registeredBy:string|any=sessionStorage.getItem('username');

  constructor(private http:HttpClient) { }

  ngOnInit(): void 
  {
    this.trainees=this.http.get(`http://localhost:9095/wep/api/gettraineebyregisteredby/${this.registeredBy}`);
    
    this.trainees.subscribe((data:any)=>
    {
      this.trainee=data[0];
    })
  }

}

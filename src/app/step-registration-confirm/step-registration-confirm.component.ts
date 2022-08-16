import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { Trainee } from '../trainee';
import { TraineeService } from '../trainee.service';

@Component({
  selector: 'app-step-registration-confirm',
  templateUrl: './step-registration-confirm.component.html',
  styleUrls: ['./step-registration-confirm.component.css']
})
export class StepRegistrationConfirmComponent implements OnInit 
{
  trainee:Trainee=new Trainee();
  id:string|any;
  courseName:string|any;
  courseSector:string|any;

  constructor(private http:HttpClient,
    private user:UserService,private traineeservice:TraineeService,
    private router:Router) { }

  ngOnInit(): void 
  {
    this.traineeservice.getTraineeList().subscribe(traineelist => 
    {
        
      for(let i=0;i<=traineelist.length;i++)
      {
        if(sessionStorage.getItem('username')==traineelist[i].registeredBy)
        {
          this.trainee==traineelist[i];
          this.id=traineelist[i].id;
          this.courseName=traineelist[i].courseName;
          this.courseSector=traineelist[i].courseSector;
        }
      }
      
      this.router.navigate([this.router.url]);
      this.router.navigate([this.router.url]);
      
    });
  }
}

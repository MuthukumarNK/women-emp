import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { TraineeService } from '../trainee.service';
import { Trainee } from '../trainee';

@Component({
  selector: 'app-admin-trainees',
  templateUrl: './admin-trainees.component.html',
  styleUrls: ['./admin-trainees.component.css']
})
export class AdminTraineesComponent implements OnInit 
{
  url:any;
  reader=new FileReader();
  file:File|any;
  trainees:Observable<Trainee[]> |any;

  constructor(private traineeService:TraineeService, private router:Router) { }

  ngOnInit(): void 
  {
    this.reloadData(); 
  }

  reloadData()
  {
    this.trainees=this.traineeService.getTraineeList(); 
  }

  traineeDetails(id:string)
  {
    this.router.navigate(['admin-trainee-details' ,id]);
  }

  editTrainee(id:string)
  {
    this.router.navigate(['admin-trainee-edit' ,id]); //navigate to componet from method
  }

  deleteTrainee(id:string)
  {
    this.traineeService.deleteTrainee(id).subscribe(data => 
      {console.log(data); this.reloadData();}, error => console.log(error));
  }

  addTrainee()
  {
    this.router.navigate(['admin-trainee-add']);
  }

}

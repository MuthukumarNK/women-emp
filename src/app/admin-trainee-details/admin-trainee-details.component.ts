import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup,} from '@angular/forms';
import { Trainee } from '../trainee';
import { TraineeService } from '../trainee.service';

@Component({
  selector: 'app-admin-trainee-details',
  templateUrl: './admin-trainee-details.component.html',
  styleUrls: ['./admin-trainee-details.component.css']
})
export class AdminTraineeDetailsComponent implements OnInit 
{

  id:string | any;
  trainee:Trainee | any;
  status='pending';
  registerForm: FormGroup|any;
  submitted: boolean|any;

  constructor(private route:ActivatedRoute, private router:Router,private formBuilder:FormBuilder,
    private traineeService:TraineeService,private http:HttpClient) { }


  ngOnInit(): void 
  {
    this.trainee = new Trainee();
      this.id=this.route.snapshot.params['id']; //snapshot is used to get route parameters
      this.traineeService.getTrainee(this.id).subscribe(data => 
        {
          console.log(data) 
          this.trainee=data;
        },
      error => console.log(error));
  }

    list()
    {
      this.router.navigate(['admin-trainee']);
    }

    approve()
    {
      this.status='Approved'

      // Instantiate a FormData to store form fields and encode the file
    let body = new FormData();
    // Add file content to prepare the request
    body.append('status',this.status);
    // Launch put request
    this.http.put(`http://localhost:9095/wep/api/trainee/${this.id}`, body)
    .subscribe(
      // Admire results
      (data) => {console.log(data)},
      // Or errors :-(
      error => alert(error),
      // tell us if it's finished
      () => { console.log("completed") }
    );
    alert('status updated')
    this.router.navigate(['admin-trainee'])
    }

    reject()
    {
      this.status='Rejected'

      // Instantiate a FormData to store form fields and encode the file
    let body = new FormData();
    // Add file content to prepare the request
    body.append('status',this.status);
    // Launch put request
    this.http.put(`http://localhost:9095/wep/api/trainee/${this.id}`, body)
    .subscribe(
      // Admire results
      (data) => {console.log(data)},
      // Or errors :-(
      error => alert(error),
      // tell us if it's finished
      () => { console.log("completed") }
    );
    alert('status updated')
    this.router.navigate(['admin-trainee'])
    }

}

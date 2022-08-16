import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router,ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Trainee } from '../trainee';
import { TraineeService } from '../trainee.service';

@Component({
  selector: 'app-admin-trainee-edit',
  templateUrl: './admin-trainee-edit.component.html',
  styleUrls: ['./admin-trainee-edit.component.css']
})
export class AdminTraineeEditComponent implements OnInit 
{
  id:string | any;
  url:any;
  trainee:Trainee | any;
  registerForm: FormGroup|any;
  file:File|any;
  submitted=false;
  trainees:Observable<Trainee[]> | any;

  constructor(private http:HttpClient,private route:ActivatedRoute, private router:Router,private formBuilder:FormBuilder,
    private traineeService:TraineeService) { }

    ngOnInit(): void 
    {
        this.trainee = new Trainee();
        this.id=this.route.snapshot.params['id']; //snapshot is used to get route parameters
        this.traineeService.getTrainee(this.id).subscribe(data => {console.log(data) 
        this.trainee=data;},
        error => console.log(error));        

        this.reloadData();
        this.createForm();
    }

    // Instantiate an AbstractControl from a user specified configuration
createForm() 
{
  this.registerForm=this.formBuilder.group({
    traineeName: ['',[Validators.required]],
    dob: ['',[Validators.required]],
    age: ['',[Validators.required]],
    noOfMembers: ['',[Validators.required]],
    noOfChildren: ['',[Validators.required]],
    email: ['',[Validators.required,Validators.email]],
    maritalStatus:['',[Validators.required]],
    annualIncome: ['',[Validators.required]],
    contactNumber: ['',[Validators.required]],
    street: ['',[Validators.required]],
    city: ['',[Validators.required]],
    pincode: ['',[Validators.required]],
    adhaarNo: ['',[Validators.required]],
    courseSector: ['',[Validators.required]],
    courseName: ['',[Validators.required]],
    image:null
  });
    
  }

  // Check for changes in files inputs via a DOMString reprsenting the name of an event
fileChange(event: any) 
{
  // Instantiate an object to read the file content
  let reader = new FileReader();

  reader.onload = (event: any) => {
    this.url=event.target.result;
  };

  // when the load event is fired and the file not empty
  if(event.target.files && event.target.files.length > 0) {
    // Fill file variable with the file content
    this.file = event.target.files[0];
  }

  reader.readAsDataURL(this.file)
}

  //convenience getter for easy access to form fields
  get f() {return this.registerForm.controls;}

  onSubmit()
    {
      this.submitted=true;
      this.trainee=this.registerForm.value;
      
      if(this.registerForm.invalid)
      {
        alert('Invalid Submission, keeping original values');
      }
      else
      {
          alert('Successfully Updated');
          this.updateTrainee();
      }
    }

    updateTrainee()
    {
      // Instantiate a FormData to store form fields and encode the file
    let body = new FormData();
    // Add file content to prepare the request
    body.append('traineeName',this.trainee.traineeName);
    body.append('dob',this.trainee.dob);
    body.append('age',this.trainee.age);
    body.append('noOfMembers',this.trainee.noOfMembers);
    body.append('noOfChildren',this.trainee.noOfChildren);
    body.append('maritalStatus',this.trainee.maritalStatus);
    body.append('annualIncome',this.trainee.annualIncome);
    body.append('email',this.trainee.email);
    body.append('contactNumber',this.trainee.contactNumber);
    body.append('street',this.trainee.street)
    body.append('city',this.trainee.city);
    body.append('pincode',this.trainee.pincode)
    body.append('adhaarNo',this.trainee.adhaarNo);
    body.append('courseSector',this.trainee.courseSector);
    body.append('courseName',this.trainee.courseName);

    if(this.file===null && this.url===null)
    {
      body.append('file',this.trainee.file);
      body.append('url',this.trainee.url);
    }
    else
    {
      body.append('file',this.file);
      body.append('url',this.url);
    }
    
    // Launch post request
    this.http.put(`http://localhost:9095/wep/api/trainees/${this.id}`, body)
    .subscribe(
      // Admire results
      (data) => {console.log(data)},
      // Or errors :-(
      error => console.log(error),
      // tell us if it's finished
      () => { console.log("completed") }
    );
    

    this.gotoList();
    }

    reloadData()
  {
    this.trainee=this.traineeService.getTraineeList();
  }

  gotoList()
  {
    this.router.navigate (['/admin-trainee']).then(()=>
    {window.location.reload();});
  }

}

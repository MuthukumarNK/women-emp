import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Trainee } from '../trainee';

@Component({
  selector: 'app-admin-trainee-add',
  templateUrl: './admin-trainee-add.component.html',
  styleUrls: ['./admin-trainee-add.component.css']
})
export class AdminTraineeAddComponent implements OnInit 
{
  url:any;
  registeredBy:string|any=sessionStorage.getItem('username');
  
  file:File|any;
  registerForm: FormGroup|any;
  submitted=false;
  

  trainee:Trainee= new Trainee();

  constructor(private formBuilder:FormBuilder,private http:HttpClient,
    private router:Router) { }
//private image: null;
ngOnInit(): void 
{
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
        alert('Invalid Submission');
      }
      else
      {
        if(!this.registerForm.invalid && this.file!=null && this.url!=null)
        {
        alert('Registration Successful');
        this.save();
        }

        else 
        {
          if(this.file==null && this.url==null)
          {
            alert('File is Mandatory');
          }
        }
      }
    }
  save()
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
    body.append('registeredBy',this.registeredBy);
    body.append('status','pending');
    body.append('file',this.file);
    body.append('url',this.url);
    // Launch post request
    this.http.post(`http://localhost:9095/wep/api/registerTrainee`, body)
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

  gotoList()
  {
    this.router.navigate(['admin-trainee']);
  }

}

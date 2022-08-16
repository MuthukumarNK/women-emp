import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Ngo } from '../ngo';
import { NgoService } from '../ngo.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ngos-register',
  templateUrl: './ngos-register.component.html',
  styleUrls: ['./ngos-register.component.css']
})
export class NgosRegisterComponent implements OnInit 
{
  url:any;
  registeredBy:string|any=sessionStorage.getItem('username');
  alreadyRegistered=false;
  
  file:File|any;
  registerForm: FormGroup|any;
  submitted=false;
  

  ngo:Ngo= new Ngo();

  constructor(private formBuilder:FormBuilder,private http:HttpClient,
              private router:Router,private ngoservice:NgoService) { }
    
    ngOnInit(): void 
    {
      this.ngoservice.getNgoList().subscribe(ngolist => 
        {
          
        for(let i=0;i<=ngolist.length;i++)
        {
          if(sessionStorage.getItem('username')==ngolist[i].registeredBy)
          {
            this.alreadyRegistered=true;
          }
        }
        
      });
      this.createForm();
    }

    
// Instantiate an AbstractControl from a user specified configuration
  createForm() {
    this.registerForm=this.formBuilder.group({
      ngoName: ['',[Validators.required]],
      ngoState: ['',[Validators.required]],
      ngoDistrict: ['',[Validators.required]],
      ngoType: ['',[Validators.required]],
      ngoUniqueId: ['',[Validators.required]],
      ngoEmail: ['',[Validators.required,Validators.email]],
      ngoWebsiteLink:[''],
      courseName: ['',[Validators.required]],
      courseSector: ['',[Validators.required]],
      courseDuration: ['',[Validators.required]],
      courseMode: ['',[Validators.required]],
      maxPeople: ['',[Validators.required]],
      inChargeName: ['',[Validators.required]],
      inChargeEmailId: ['',[Validators.required,Validators.email]],
      inChargeContactNo: ['',[Validators.required]],
      fundExpected: ['',[Validators.required]],
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
    this.ngo=this.registerForm.value;
    
    if(this.registerForm.invalid)
    {
      alert('Invalid Submission');
    }
    else
      {
        if(this.alreadyRegistered==true)
        {
          alert('This User has already registered an NGO, navigating to status');
          this.router.navigate(['ngos-status']);
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
              window.location.reload();
            }
          }
        }
      }
  }

  save()
  {
    // Instantiate a FormData to store form fields and encode the file
    let body = new FormData();
    // Add file content to prepare the request
    body.append('ngoName',this.ngo.ngoName);
    body.append('ngoState',this.ngo.ngoState);
    body.append('ngoDistrict',this.ngo.ngoDistrict);
    body.append('ngoType',this.ngo.ngoType);
    body.append('ngoUniqueId',this.ngo.ngoUniqueId);
    body.append('ngoEmail',this.ngo.ngoEmail);
    body.append('ngoWebsiteLink',this.ngo.ngoWebsiteLink);
    body.append('courseName',this.ngo.courseName);
    body.append('courseSector',this.ngo.courseSector);
    body.append('courseDuration',this.ngo.courseDuration);
    body.append('courseMode',this.ngo.courseMode)
    body.append('maxPeople',this.ngo.maxPeople);
    body.append('inChargeName',this.ngo.inChargeName)
    body.append('inChargeEmailId',this.ngo.inChargeEmailId);
    body.append('inChargeContactNo',this.ngo.inChargeContactNo);
    body.append('fundExpected',this.ngo.fundExpected);
    body.append('registeredBy',this.registeredBy);
    body.append('status','Pending');
    body.append('file',this.file);
    body.append('url',this.url);
    
    // Launch post request
    this.http.post(`http://localhost:9095/wep/api/registerNgo`, body)
    .subscribe(
      // Admire results
      (data) => {console.log(data)},
      // Or errors :-(
      error => console.log(error),
      // tell us if it's finished
      () => { console.log("completed") }
    );
    this.ngo=new Ngo();

    this.gotoList();
  }

  gotoList()
  {
    this.router.navigate(['ngos-status']);
  }

}

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router,ActivatedRoute } from '@angular/router';
import { Ngo } from '../ngo';
import { NgoService } from '../ngo.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-ngo-edit',
  templateUrl: './admin-ngo-edit.component.html',
  styleUrls: ['./admin-ngo-edit.component.css']
})
export class AdminNgoEditComponent implements OnInit 
{
  id:string | any;
  url:any;
  ngo:Ngo | any;
  registerForm: FormGroup|any;
  file:File|any;
  submitted=false;
  ngos:Observable<Ngo[]> | any;


  constructor(private http:HttpClient,private route:ActivatedRoute, private router:Router,private formBuilder:FormBuilder,
    private ngoService:NgoService) { }

    ngOnInit(): void 
    {
        this.ngo = new Ngo();
        this.id=this.route.snapshot.params['id']; //snapshot is used to get route parameters
        this.ngoService.getNgo(this.id).subscribe(data => {console.log(data) 
        this.ngo=data;},
        error => console.log(error));        

        this.reloadData();
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
      
    };

    // Check for changes in files inputs via a DOMString reprsenting the name of an event
  fileChange(event: any) {
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
        alert('Invalid Submission, keeping original values');
      }
      else
      {
          alert('Successfully Updated');
          this.updateNgo();
      }
    }

    updateNgo()
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
    
    if(this.file===null && this.url===null)
    {
      body.append('file',this.ngo.file);
      body.append('url',this.ngo.url);
    }
    else
    {
      body.append('file',this.file);
      body.append('url',this.url);
    }
    // Launch put request
    this.http.put(`http://localhost:9095/wep/api/ngos/${this.id}`, body)
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

  reloadData()
  {
    this.ngo=this.ngoService.getNgoList();
  }

  gotoList()
  {
    this.router.navigate (['/admin-ngo']).then(()=>
    {window.location.reload();});
  }

    
  

}

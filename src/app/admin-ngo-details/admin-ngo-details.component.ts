import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Ngo } from '../ngo';
import { NgoService } from '../ngo.service';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup,} from '@angular/forms';

@Component({
  selector: 'app-admin-ngo-details',
  templateUrl: './admin-ngo-details.component.html',
  styleUrls: ['./admin-ngo-details.component.css']
})
export class AdminNgoDetailsComponent implements OnInit 
{
  id:string | any;
  ngo:Ngo | any;
  status='pending';
  registerForm: FormGroup|any;
  submitted: boolean|any;

  constructor(private route:ActivatedRoute, private router:Router,private formBuilder:FormBuilder,
    private ngoService:NgoService,private http:HttpClient) { }

    ngOnInit(): void 
    {
      this.ngo = new Ngo();
      this.id=this.route.snapshot.params['id']; //snapshot is used to get route parameters
      this.ngoService.getNgo(this.id).subscribe(data => 
        {
          console.log(data) 
          this.ngo=data;
        },
      error => console.log(error));
      
    }
  
    

    list()
    {
      this.router.navigate(['admin-ngo']);
    }

    approve()
    {
      
      this.status='Approved'

      // Instantiate a FormData to store form fields and encode the file
    let body = new FormData();
    // Add file content to prepare the request
    body.append('status',this.status);
    // Launch put request
    this.http.put(`http://localhost:9095/wep/api/ngo/${this.id}`, body)
    .subscribe(
      // Admire results
      (data) => {console.log(data)},
      // Or errors :-(
      error => alert(error),
      // tell us if it's finished
      () => { console.log("completed") }
    );
    alert('status updated')
    this.router.navigate(['admin-ngo'])
    }

    reject()
    {
      
      this.status='Rejected'

      // Instantiate a FormData to store form fields and encode the file
    let body = new FormData();
    // Add file content to prepare the request
    body.append('status',this.status);
    // Launch put request
    this.http.put(`http://localhost:9095/wep/api/ngo/${this.id}`, body)
    .subscribe(
      // Admire results
      (data) => {console.log(data)},
      // Or errors :-(
      error => alert(error),
      // tell us if it's finished
      () => { console.log("completed") }
    );
    alert('status updated')
    this.router.navigate(['admin-ngo'])
    }
}

import { Component, OnInit } from '@angular/core';
import { Ngo } from '../ngo';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-ngos-status',
  templateUrl: './ngos-status.component.html',
  styleUrls: ['./ngos-status.component.css']
})
export class NgosStatusComponent implements OnInit {

  ngos:Observable<Ngo[]>|any;
  ngo:Ngo|any;
  registeredBy:string|any=sessionStorage.getItem('username');

  
  constructor(private http:HttpClient) { }

  ngOnInit(): void 
  {
    this.ngos=this.http.get(`http://localhost:9095/wep/api/getngosbyregisteredby/${this.registeredBy}`)
    this.ngos.subscribe((data:any)=>
    {
      this.ngo=data[0];
    })
  }

}

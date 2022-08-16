import { Component, OnInit } from '@angular/core';
import { findIndex, Observable } from 'rxjs';
import { Ngo } from '../ngo';
import { HttpClient } from '@angular/common/http';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-ngos-organizations',
  templateUrl: './ngos-organizations.component.html',
  styleUrls: ['./ngos-organizations.component.css']
})
export class NgosOrganizationsComponent implements OnInit 
{
  ngos: Observable<Ngo[]>|any;
  approvedngos:Observable<Ngo[]>|any;
  constructor(private http:HttpClient) { }

  ngOnInit(): void 
  {
    this.ngos=this.http.get(`http://localhost:9095/wep/api/findAllNgos`)
  }

  check(status:string)
  {
    if(status=='Approved')
    {
      return true
    }
    else
    {
      return false
    }
  }
}

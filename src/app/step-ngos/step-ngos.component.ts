import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { NgoService } from '../ngo.service';
import { Ngo } from '../ngo';

@Component({
  selector: 'app-step-ngos',
  templateUrl: './step-ngos.component.html',
  styleUrls: ['./step-ngos.component.css']
})
export class StepNgosComponent implements OnInit {
  ngos:Observable<Ngo[]> |any;
  constructor(private ngoService:NgoService, private router:Router) { }

  ngOnInit(): void 
  {
    this.reloadData();
  }

  reloadData()
  {
    this.ngos=this.ngoService.getNgoList();
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



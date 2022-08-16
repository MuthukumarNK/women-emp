import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { NgoService } from '../ngo.service';
import { Ngo } from '../ngo';

@Component({
  selector: 'app-training-sectors-agriculture',
  templateUrl: './training-sectors-agriculture.component.html',
  styleUrls: ['./training-sectors-agriculture.component.css']
})
export class TrainingSectorsAgricultureComponent implements OnInit {

  ngos:Observable<Ngo[]> |any;
  constructor(private ngoService:NgoService, private router:Router) { }

  ngOnInit(): void 
  {
    this.reloadData();
  }

  reloadData()
  {
    this.ngos=this.ngoService.getNgoBySector('Agriculture');
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

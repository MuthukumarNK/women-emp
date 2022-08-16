import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { NgoService } from '../ngo.service';
import { Ngo } from '../ngo';

@Component({
  selector: 'app-training-sectors-tailoring',
  templateUrl: './training-sectors-tailoring.component.html',
  styleUrls: ['./training-sectors-tailoring.component.css']
})
export class TrainingSectorsTailoringComponent implements OnInit {

  ngos:Observable<Ngo[]> |any;
  constructor(private ngoService:NgoService, private router:Router) { }

  ngOnInit(): void 
  {
    this.reloadData();
  }

  reloadData()
  {
    this.ngos=this.ngoService.getNgoBySector('Tailoring');
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

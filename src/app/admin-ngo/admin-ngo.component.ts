import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { NgoService } from '../ngo.service';
import { Ngo } from '../ngo';

@Component({
  selector: 'app-admin-ngo',
  templateUrl: './admin-ngo.component.html',
  styleUrls: ['./admin-ngo.component.css']
})
export class AdminNgoComponent implements OnInit {
  url:any;
  reader=new FileReader();
  file:File|any;
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

  ngoDetails(id:string)
  {
    this.router.navigate(['admin-ngo-details' ,id]);
  }

  editNgo(id:string)
  {
    this.router.navigate(['admin-ngo-edit' ,id]); //navigate to componet from method
  }

  deleteNgo(id:string)
  {
    this.ngoService.deleteNgo(id).subscribe(data => 
      {console.log(data); this.reloadData();}, error => console.log(error));
  }

  addNgo()
  {
    this.router.navigate(['admin-ngo-add']);
  }
}

  



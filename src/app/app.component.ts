import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit
{
  trainingSectors:any=['Agriculture','Tailoring', 'Stitching'];

  constructor(public userService:UserService,private http:HttpClient) //public bcuz we use it outside class
  {

  }

  ngOnInit(): void 
  {

  }
}

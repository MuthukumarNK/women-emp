import { Component, OnInit, } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';

@Component({
  selector: 'app-step-home',
  templateUrl: './step-home.component.html',
  styleUrls: ['./step-home.component.css']
})
export class StepHomeComponent implements OnInit {
  user:User|any
  username=sessionStorage.getItem('username')
  constructor(private http:HttpClient) { }

  ngOnInit(): void 
  {
    
    let users:Observable<any>
    users=this.http.get(`http://localhost:9095/wep/api/findAllUsers`)
    users.subscribe((data:User[]) =>
    {
      for(let user of data)
      {
        if(user.email==this.username)
        {
          this.user=user
        }
      }
    }
    )
  }

  bb(){
    return "title-step"; 
  }
}

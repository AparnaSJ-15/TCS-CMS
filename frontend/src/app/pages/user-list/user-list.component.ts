import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  signups:any=[]
  constructor(private api:ApiService, private router:Router) { }

  ngOnInit(): void {
    this.getData()
  }
  getData(){
    this.api.getSignupList().subscribe(res=>{
      this.signups = res;
    })
  }

}

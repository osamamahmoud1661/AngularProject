import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit{
getname=""
getid=""
  constructor(private route : ActivatedRoute) {
       route.params.subscribe(data=>{
       this.getname=data['name']
       this.getid=data['id']
       })
  }
  ngOnInit(): void {
  }

}

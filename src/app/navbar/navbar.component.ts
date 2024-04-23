import { Component, OnInit } from '@angular/core';
import { ShareserviceService } from '../service/shareservice.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
 condition=false
  constructor(private share:ShareserviceService) {
    this.condition=share.isAdmin
  }
  ngOnInit(): void {
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShareserviceService } from '../service/shareservice.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  constructor(private route:Router,private share:ShareserviceService) {    
    share.print()
  }
  ngOnInit(): void {
  }
  profile ={
    firstName : "osama",
    lastName:"mahmoud",
    website :"www.osama.com",
    country:"Egypt",
    age :25
}
imageLink="https://th.bing.com/th/id/OIP.DpcLyyRCeTWoiiMNdCTXxQHaEK?rs=1&pid=ImgDetMain"
link="https://www.google.com.eg/"
titleStyle1="color:red;"
titleStyle2="block"
number = 0
show(){
this.titleStyle2="block"
}
hide(){
this.titleStyle2="none"
}
decrement(){
this.number--
}
increment(){
this.number++
}
green(){
this.titleStyle1="color:green;font-size:20px;"

}
red(){
this.titleStyle1="color:red;font-size:40px;"

}
gotoview(){
this.route.navigate(['/profile/view/'+this.profile.firstName])
  }
gotodetails(){
  this.route.navigate(['/profile/detaile'])

  }

save(f:NgForm){
  let data = f.value
  console.log(data)
}
}

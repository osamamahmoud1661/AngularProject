import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent {
  name=""
  constructor(private route:ActivatedRoute){
    route.params.subscribe(data=>{
      this.name=data['name']
    })
  }

}

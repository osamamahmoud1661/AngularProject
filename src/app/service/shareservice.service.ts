import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareserviceService {
  data ={
    name:"osama",
    last:"mahmoud",
    country:"egypt"
  }
isAdmin=false
  constructor() { }
  print(){
    console.log(this.data.name)
    console.log(this.data.last)
    console.log(this.data.country)
  }
}

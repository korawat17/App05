import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private detail: NavController) {}

items=[
  {
    id:1,
    name:'Product A',
    detail:'this is a Product A',
    imageURL:'http://placehold.co/600x400',
    price:'201'

  },
  {
    id:2,
    name:'Product B',
    detail:'this is a Product B',
    imageURL:'http://placehold.co/600x400',
    price:'202'
  },
  {
    id:3,
    name:'Product C',
    detail:'this is a Product C',
    imageURL:'http://placehold.co/600x400',
    price:'203'


  },
  {
    id:4,
    name:'Product D',
    detail:'this is a Product D',
    imageURL:'http://placehold.co/600x400',
    price:'204'


  },
]
gotoDetail(i:any){
  this.detail.navigateForward('/detail',{state:{i}});
}
}

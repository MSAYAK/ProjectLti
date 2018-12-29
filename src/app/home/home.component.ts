import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
todaysDate =new Date();
cust={
  name:"Shardul",
  age:25,
  address:{
    city:'Bangalore',
    state:'Karntaka'
  }

};

months =["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  constructor() { }

  ngOnInit() {
  }

}

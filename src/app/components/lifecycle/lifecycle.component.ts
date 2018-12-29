import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent {
  data : number = 100;
  constructor() {
    //console.log('new data is'+this.data);
    console.log('new data is ${this.data}');
   }
 ngOnChanges()
 {
  console.log('ngOnChanges -data is ${this.data}');
 }
  ngOnInit() {
    console.log('ngOnInit -data is ${this.data}');
  }
  ngDoCheck() {
    console.log('ngDoCheck');
  }
  ngAfterContentInit(){
    console.log('ngAfterContentInit');
  }
  ngAfterContentChecked(){
    console.log('ngAfterContentInit');
  }
  ngAfterViewInit(){
    console.log('AfterViewInit');
  }
  ngAfterViewChecked(){
    console.log('AfterViewChecked');
  }
  ngOnDestroy()
  {
    console.log('ngOnDestroy');
  }

  addNumber():void{
    this.data +=100;
  }
  deleteNumber():void{
    this.data -=10;
  }
}

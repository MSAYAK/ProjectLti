import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor() { }
  addNumbers(num1:number,num2:number){
    return num1+num2;
  }
  mulNumbers(num1:number,num2:number){
    return num1*num2;
  }
}

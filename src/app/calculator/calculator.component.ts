import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {CalculatorService} from '../services/calculator.service';
@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  calculateForm: FormGroup;
  submitted: Boolean=false;
  constructor(private formBuilder: FormBuilder, private calcService:CalculatorService) { }

  ngOnInit() {
    this.calculateForm=this.formBuilder.group({
      num1:['',Validators.required],
      num2:['',Validators.required]
    });
  }
  onSubmit(){
    this.submitted=true;
    if(this.calculateForm.invalid){
      return;
    }
  }
  addNumbers(num1:string,num2:string)
  {
    let res=this.calcService.addNumbers(parseFloat(num1),parseFloat(num2));
     alert("Addition is: "+res);

  }
   mulNumbers(num1:string,num2:string)
   {
    let res=this.calcService.mulNumbers(parseFloat(num1),parseFloat(num2));
    alert("Multiplication is: "+res);
   }


}
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-approach',
  templateUrl: './reactive-approach.component.html',
  styleUrl: './reactive-approach.component.css'
})
export class ReactiveApproachComponent {

  myForm : FormGroup;

  constructor(){
    this.myForm = new FormGroup({
       userName : new FormControl("" , [Validators.required]),
       userEmail : new FormControl("" , [Validators.required , Validators.email]),
       userComments : new FormControl("",[Validators.required , Validators.minLength(5)])
    });
  }


  evtSubmit(){
     console.log(this.myForm);
  }



}

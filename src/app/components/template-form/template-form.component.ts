import { Component, OnInit, ViewChild } from '@angular/core';

class Signup {
  constructor(public firstName:string = '',
              public lastName:string = '',
              public email:string = '',
              public password:string = '',
              public language:string = '') {
  }
}

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
  model: Signup = new Signup();
  @ViewChild('f') form:any;
  @ViewChild('email') email:any;
  langs:string[] = [
    'English',
    'French',
    'German',
];
  constructor() { }

  ngOnInit() {
    
  }
  onSubmit(){
    if(this.form.valid){
      // console.log(this.form.controls.email.value);
      // console.log(this.form.value);
      // console.log(this.email.value);
      this.form.reset();
    }
  }

}

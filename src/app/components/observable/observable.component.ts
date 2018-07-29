import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '../../../../node_modules/@angular/forms';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {
  form: FormGroup;
  // comment = new FormControl("", Validators.required);
  // name = new FormControl("", Validators.required);
  // email = new FormControl("", [Validators.required, Validators.pattern("[^ @]*@[^ @]*")]);


  constructor(fb:FormBuilder) {
    this.form = fb.group({
      'comment':["", Validators.required],
      'name': ["", Validators.required],
      'email': ["", Validators.compose([Validators.required, Validators.pattern("[^ @]*@[^ @]*")])]
    });
   }

  ngOnInit() {
    this.form.valueChanges
              // .filter(data => this.form.valid)
              // .map( data => {data.comment = data.comment.replace(/<(?:.|\n)*?>/gm, '')
              //   return data;
              // })
              // .map( data => {data.lastUpdateTs = new Date('dd/mm/yyyy');
              //   return data;
              // })
              /* Or */
              .subscribe(val => 
                {
                  if(this.form.valid){
                    val.comment = val.comment.replace(/<(?:.|\n)*?>/gm, '');
                    val.lastUpdateTs = new Date();
                    //console.log(JSON.stringify(val))
                  }
                });
  }

  onSubmit(){
    //console.log('form submitted');
  }
}

import { Component, OnInit, OnDestroy} from '@angular/core';
import {Observable} from 'rxjs';

@Component({
  selector: 'async-pipe',
  templateUrl: './async-pipe.component.html',
  styleUrls: ['./async-pipe.component.css']
})
export class AsyncPipeComponent implements OnInit {

  promiseData: any;
  promise : Promise<any>;
  subscription: any;
  observableData: number;
  observable: Observable<number>;
  private jsonVal = {name:'sdgfhsd', add:'5asf/sdfsd'};
  constructor() {
    
   }

  ngOnInit() {
    // this.getPromise().then(val => this.promiseData = val);
    this.promise = this.getPromise() // for promise
    //this.subscribeObservable();
    this.observable = this.getObservable();
  }
  getObservable() { 
    return Observable
        .interval(1000)
        .take(10)
        .map((v) => v + v);
  }

  // subscribeObservable() { 
  //   this.subscription = this.getObservable()
  //       .subscribe( v => this.observableData = v);
  // }

  getPromise(){
    return new Promise((resolve, reject) => {
      setTimeout( () => resolve({'Promise Done':'dfgdfgfdg', 'sdfsdf':5}),3000);
    });
  }
  // ngOnDistroy(){
  //   if(this.subscription){
  //     this.subscription.unsubscribe();
  //   }
  // }

}

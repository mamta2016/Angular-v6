import { Component, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { JokeListComponent } from './components/joke-list/joke-list.component';
import { Human } from './human';
import * as Rx from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  obj = {a:1,b:2};
  array = [10,20,30];
  titles: 'Joke List';
  list = [];
  data: any;
  imageUrl:string = '';
 @ViewChild(JokeListComponent) jokeListView: JokeListComponent
 @ViewChildren(JokeListComponent) jokelistChildern: QueryList<JokeListComponent>;
  constructor(){
    
  }

  //distructuring

  

  // ngOnChanges() {
  //   console.log(`ngOnChanges - data is ${this.data}`);
  // }
  
  ngOnInit() {
    // console.log(`ngOnInit  - data is ${this.data}`);
    // let list:JokeListComponent[] = this.jokelistChildern.toArray();
    // console.log(list);

    //distructuring
    // const names = { name: 'mamta', add: 'rewa' };
    // const arr = ['mamta', 'rewa'];
    // const { name: a } = names;
    // const [x] = arr;
    // console.log(a);
    // console.log(x)

    // this.f({ x: 5, y: 6 });

    // let map = new Map([
    //     ["APPLE", 1],
    //     ["ORANGE", 2],
    //     ["MANGO", 3]]);
    // let map = new Map()
    // .set('tr', 'mapMethod');

    // for (let key of map.keys()) {
    //   console.log(key);
    // }
    
    // console.log(map.has('tr'));

    // for (let key of map.entries()) {
    //   console.log(key[0],key[1]);
    // }
    // Set
    let set = new Set(
      //[
      //   ["APPLE", 1],
      //   ["ORANGE", 2],
      //   ["MANGO", 3]
      // ]
    )
      .add('mammy')
      .add('papa');
    for(let entry of set.entries()){
      // console.log(`${'hello'}`,entry[0]);
    }
    // console.log(set.has('dfhfgh'));

    /* Observable example */

    let obs = Rx.Observable
              .interval(1000)
              .take(1)
              .map( d => Date.now());
  obs.subscribe( value => console.log(`${value}`))
  }

// For of Example 
  // f({ x, y }) {
  //   //console.log(x,y);
  //   for (let o in this.obj) { //for-in use for obj
  //     console.log(this.obj[o])
  //   }
  //   for (let arr of this.array) { //for-of use for array
  //     console.log(arr);
  //   }
  // }
  
  // ngDoCheck() {
  //   console.log("ngDoCheck")
  // }

  // ngAfterContentInit() {
  //   console.log("ngAfterContentInit");
  // }

  // ngAfterContentChecked() {
  //   console.log("ngAfterContentChecked");
  // }

  // ngAfterViewInit() {
  //   console.log("ngAfterViewInit");
  // }

  // ngAfterViewChecked() {
  //   console.log("ngAfterViewChecked");
  // }

  // ngOnDestroy() {
  //   console.log("ngOnDestroy");
  // }
  // viewcontent(){
  //  return this.jokeListView.addJoke();
  // }
  
}

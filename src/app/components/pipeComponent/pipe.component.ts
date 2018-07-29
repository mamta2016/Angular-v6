import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

  public dateVal: Date = new Date();
  private jsonVal = {name:'sdgfhsd', add:'5asf/sdfsd'};
  public sliceVal = ['d','d','d','d','d','d',];
  constructor() { }

  ngOnInit() {
  }

}

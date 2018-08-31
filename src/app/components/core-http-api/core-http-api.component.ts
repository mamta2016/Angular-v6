import { Component, OnInit } from '@angular/core';
import { Http, URLSearchParams, Response, RequestOptions, Headers } from '@angular/http';
import 'rxjs';

@Component({
  selector: 'app-core-http-api',
  templateUrl: './core-http-api.component.html',
  styleUrls: ['./core-http-api.component.css']
})
export class CoreHttpAPIComponent implements OnInit {
  apiRoot: string = "http://httpbin.org"; 

  constructor(private http: Http) { }

  ngOnInit() {
  }

  doGET() {
    console.log("GET");
    let url = `${this.apiRoot}/get`;
    let search = new URLSearchParams();
    search.set('foo', 'moo');
    search.set('limit', '20');
    this.http.get(url, {search}).subscribe(res => console.log(res.json()));
  }

  doPOST() {
    console.log("POST");
    let url = `${this.apiRoot}/post`;
    let search = new URLSearchParams();
    search.set('foo', 'moo');
    search.set('limit', '20');
    this.http.post(url,{moo:'foo', goo:'loo'},{search}).subscribe(res => console.log(res.json()));
  }

  doPUT() {
    console.log("PUT");
    let url = `${this.apiRoot}/put`;
    let search = new URLSearchParams();
    search.set('foo', 'moo');
    search.set('limit', '20');
    this.http.put(url,{moo:'foo', goo:'loo'},{search}).subscribe(res => console.log(res.json()));
  }

  doDELETE() {
    console.log("DELETE");
    let url = `${this.apiRoot}/delete`;
    let search = new URLSearchParams();
    search.set('foo', 'moo');
    // search.set('limit', '20');
    this.http.delete(url,{search}).subscribe(res => console.log(res.json()));
  }

  doGETAsPromise() {
    console.log("GET AS PROMISE");
    let url = `${this.apiRoot}/get`;
    let search = new URLSearchParams();
    search.set('foo', 'moo');
    search.set('limit', '20');
    this.http.get(url, {search})
    .toPromise()
    .then(res => console.log(res.json()));
  }

  doGETAsPromiseError() {
    console.log("GET AS PROMISE ERROR");
    let url = `${this.apiRoot}/post`;
    let search = new URLSearchParams();
    search.set('foo', 'moo');
    search.set('limit', '20');
    this.http.get(url, {search})
    .toPromise()
    .then(res => console.log(res.json()),
    // msg => console.error(`Error: ${msg.status} ${msg.statusText}`) // error msg
    )
    .catch(msg => console.error(`Error: ${msg.status} ${msg.statusText}`)); //error msg this way also can handle
  }

  doGETAsObservableError() {
    console.log("GET AS OBSERVABLE ERROR");
    let url = `${this.apiRoot}/post`;
    let search = new URLSearchParams();
    search.set('foo', 'moo');
    search.set('limit', '20');
    this.http.get(url, {search})
    .subscribe(res => console.log(res.json()),
      msg => console.error(`Error: ${msg.status} ${msg.statusText}`) // error msg
    )
  }

  doGETWithHeaders() {
    console.log("GET WITH HEADERS");

    let header = new Headers();
    header.append('pwd', btoa('username: password'))
    let search = new URLSearchParams();
    search.set('foo', 'moo');
    search.set('limit', '20');

    let opts = new RequestOptions();
    opts.headers = header;
    opts.search = search;

    let url = `${this.apiRoot}/get`;
    this.http.get(url, opts)
    .subscribe(res => console.log(res.json()),
      msg => console.error(`Error: ${msg.status} ${msg.statusText}`) // error msg
    )
  }
}

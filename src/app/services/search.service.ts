import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';
import { CanActivate, CanActivateChild, CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { HttpWithPromiseComponent } from '../components/http-with-promise/http-with-promise.component';

export class SearchItem {
  constructor(
    public name: string,
    public artist: string,
    public link: string,
    public thumbnail: string,
    public artistId: string
  ) {}
}

export class AlwaysAuthGuard implements CanActivate {
  canActivate() {
    console.log("AlwaysAuthGuard");
    return true;
  }
}

export class AlwaysAuthChildGuard implements CanActivateChild {
  canActivateChild() {
    console.log("AlwaysAuthChildGuard");
    return true;
  }
}
export class UserService {
  isLoggedIn(): boolean {
    return false;
  }
}
export class UnsearchedTermGuard implements CanDeactivate<HttpWithPromiseComponent> { 
  canDeactivate(component: HttpWithPromiseComponent, 
                route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): boolean {
    console.log("UnsearchedTermGuard");
    console.log(route.params);
    console.log(state.url);
    return component.canDeactivate() || window.confirm("Are you sure?");
  }
}
@Injectable()
export class SearchService {
  
  apiRoot:string = 'https://itunes.apple.com/search';
  //results:Object[];
  loading:boolean;
  results: SearchItem[];

  constructor(private http:Http) { 
    this.results = [];
    this.loading = false;
  }

  search(term:string) {
    let promise = new Promise((resolve, reject) => {
      let apiURL = `${this.apiRoot}?term=${term}&media=music&limit=20`;
      this.http.get(apiURL)
        .toPromise()
        .then(
          res => { // Success
            //console.log(res.json());
            this.results = res.json().results.map( item => {
              return new SearchItem(
                item.trackName,
                item.artistName,
                item.trackViewUrl,
                item.artworkUrl30,
                item.artistId
            );

            })
            resolve();
          },
          msg => {
            reject();
          }
        );
    });
    return promise;
  }
}

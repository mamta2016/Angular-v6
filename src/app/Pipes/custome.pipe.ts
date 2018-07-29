import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'default'
})
export class CustomePipe implements PipeTransform {

  transform(value: string, args : string, forceHttp:boolean = false): any {
    let image = "";
    if(value){
      image = value;
    } else {
      image = args;
    }
    if(forceHttp){
      if(image.indexOf('http') ===-1){
        image.replace('http','https');
      }
    }
    return image;
  }

}

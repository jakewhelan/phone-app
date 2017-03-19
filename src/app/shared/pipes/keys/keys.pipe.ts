import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keys'
})
export class KeysPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
http://stackoverflow.com/questions/35534959/access-key-and-value-of-object-using-ngfor
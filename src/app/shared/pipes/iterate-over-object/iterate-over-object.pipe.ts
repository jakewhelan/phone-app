import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'iterateOverObject'
})
export class IterateOverObjectPipe implements PipeTransform {

  /**
   *  @function transform
   *
   *  Object is not an interable type so it cannot be used within
   *  the NgFor directive. In this pipe we accept an Object of Objects
   *  and return Array of Objects so it can be used to generate components
   *  using the NgFor directive.
   */

  transform(value: any, args?: any[]): any[] {

  	let keys: any[] = Object.keys(value),
  			data = [];

  	// push each Object in the value Object to the data Array
  	keys.forEach((key: any) => {
      value[key].key = key;
  		data.push(value[key]);
  	});

  	// return the data Array
  	return data;	

	}

}
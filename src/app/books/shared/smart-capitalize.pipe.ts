import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'smartCapitalize'
})
export class SmartCapitalizePipe implements PipeTransform {
  transform(value: string) {
    let answer: string = '';
    let firstLetter = true;
    for(let char of value){
      if(char === ' ') {
        answer += char;
        firstLetter = true;
      } else if(firstLetter) {
        answer += char.toUpperCase();
        firstLetter = false;
      } else {
        answer += char.toLowerCase();
      }
    }
    return answer;
  }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'onlyEnglish'
})
export class OnlyEnglishPipe implements PipeTransform {
  transform(value: string) {
    let answer = '';
    for(let char of value){
      if((char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z') || char === ' ')
        answer += char;
    }
    return answer;
  }
}

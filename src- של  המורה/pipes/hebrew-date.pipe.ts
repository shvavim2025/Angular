import { Pipe, PipeTransform } from '@angular/core';
import { formatJewishDateInHebrew, toJewishDate } from 'jewish-date';

@Pipe({
  name: 'hebrewDate',
  standalone: true
})
export class HebrewDatePipe implements PipeTransform {

  transform(value: Date, convertType: number): any {
    const jewishDate = toJewishDate(value);
    
    switch (convertType){
      case(1):
      return  jewishDate
      default:
        return formatJewishDateInHebrew(jewishDate);
    }
  }
}
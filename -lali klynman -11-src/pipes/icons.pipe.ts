import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'icons',
  standalone: true
})
export class IconsPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    switch (value) {
      case'student':
      return '👩‍🎓';
      case 'teacher':
        return '👩‍🏫';
      case 'course':
        return '📚';
      
      default: return '👍';
    }
  }

}

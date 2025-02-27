import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'initials',
  standalone: false
})
export class InitialsPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return '';
    
    // Separar el nombre completo en palabras
    const words = value.split(' ');
    
    // Tomar la primera letra de cada palabra
    const initials = words.map(word => word.charAt(0).toUpperCase()).join('');
    
    return initials;
  }
}

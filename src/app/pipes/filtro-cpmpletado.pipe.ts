import { Pipe, PipeTransform } from '@angular/core';
import { Lista } from '../models/lista.model';

@Pipe({
  name: 'filtroCpmpletado',
  pure: false
})
export class FiltroCpmpletadoPipe implements PipeTransform {

  transform( listas: Lista[], completada: boolean = true ): Lista[] {

    return listas.filter( lista => lista.terminada === completada);

  }

}

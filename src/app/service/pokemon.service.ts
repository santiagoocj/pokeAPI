import { HttpClient } from '@angular/common/http';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import Swal from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private urlEndpoint = "https://pokeapi.co/api/v2/pokemon/";

  constructor(private htpp: HttpClient) { }

  getPokemon(buscarPokemon: string): Observable<any> {
    return this.htpp.get(this.urlEndpoint + buscarPokemon).pipe(
      catchError(e => {
        if(e.status == 404){
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `No se encontró el pokemon "${buscarPokemon}" en la base de datos!`,
          })
          return throwError(e);
        }
      })
    );
  }
}

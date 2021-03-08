import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../service/pokemon.service';
import { Pokemon } from '../../models/pokemon';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {


  buscarPokemon: string;
  public pokemon: Pokemon = new Pokemon();

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
  }

  search(): void{
    this.pokemonService.getPokemon(this.buscarPokemon.toLowerCase()).subscribe(pokemon => {
      this.pokemon.nombre = pokemon.name;
      this.pokemon.tipo = pokemon.types[0].type.name;
      this.pokemon.movimientos = pokemon.moves;
      this.pokemon.imagenes = pokemon.sprites;
      this.buscarPokemon = "";
    });
  }

}

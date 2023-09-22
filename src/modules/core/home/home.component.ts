import { Component } from '@angular/core';
import { SubSink } from 'subsink';
import { PokemonService } from 'src/modules/shared/services/pokemon.service';
import { finalize, switchMap } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  private subs = new SubSink();

  pictureUrl: string = '';

  
  firstGenPokemon: any[] = [];
  secondGenPokemon: any[]=[];
  thirdGenPokemon: any[] = [];
  fourthGenPokemon: any[] = [];
  fifthGenPokemon: any[] = [];
  sixthGenPokemon: any[] = [];
  seventhGenPokemon: any[] = [];


  constructor(private pokemonService: PokemonService, private router: Router) {

    for (let i = 0; i < 9; i++) {
      this.subs.sink = this.pokemonService
        .getPokemonData(1 + i)
        .subscribe((data) => {
//          this.firstGenSpriteUrls.push(data.sprites.front_default);
          this.firstGenPokemon.push(data);
          this.firstGenPokemon.sort();
        });
    }   

    for (let i = 0; i < 9; i++) {
      this.subs.sink = this.pokemonService
        .getPokemonData(152 + i)
        .subscribe((data) => {
          this.secondGenPokemon.push(data);
          this.secondGenPokemon.sort();
        });
    }

    for (let i = 0; i < 9; i++) {
      this.subs.sink = this.pokemonService
        .getPokemonData(252 + i)
        .subscribe((data) => {
          this.thirdGenPokemon.push(data);
          this.thirdGenPokemon.sort();
        });
    }

    for (let i = 0; i < 9; i++) {
      this.subs.sink = this.pokemonService
        .getPokemonData(387 + i)
        .subscribe((data) => {
          this.fourthGenPokemon.push(data);
          this.fourthGenPokemon.sort();
        });
    }

    for (let i = 0; i < 9; i++) {
      this.subs.sink = this.pokemonService
        .getPokemonData(495 + i)
        .subscribe((data) => {
          this.fifthGenPokemon.push(data);
          this.fifthGenPokemon.sort();
        });
    }

    for (let i = 0; i < 9; i++) {
      this.subs.sink = this.pokemonService
        .getPokemonData(650 + i)
        .subscribe((data) => {
          this.sixthGenPokemon.push(data);
          this.sixthGenPokemon.sort();
        });
    }

    for (let i = 0; i < 9; i++) {
      this.subs.sink = this.pokemonService
        .getPokemonData(722 + i)
        .subscribe((data) => {
          this.seventhGenPokemon.push(data);
          this.seventhGenPokemon.sort();
        });
    }
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}

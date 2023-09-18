import { Component } from '@angular/core';
import { SubSink } from 'subsink';
import { PokemonService } from 'src/modules/shared/services/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  private subs = new SubSink();

  pictureUrl: string = '';

  firstGenSpriteUrls: string[] = [];

  secondGenSpriteUrls: string[] = [];

  thirdGenSpriteUrls: string[] = [];
  fourthGenSpriteUrls: string[] = [];
  fifthGenSpriteUrls: string[] = [];
  sixthGenSpriteUrls: string[] = [];
  seventhGenSpriteUrls: string[] = [];

  constructor(private pokemonService: PokemonService) {
    for (var i = 0; i < 10; i++) {
      this.subs.sink = this.pokemonService
        .getPokemonData(i)
        .subscribe((data) => {
          this.firstGenSpriteUrls.push(data.sprites.front_default);
        });
    }

    for (var i = 0; i < 9; i++) {
      this.subs.sink = this.pokemonService
        .getPokemonData(152 + i)
        .subscribe((data) => {
          this.secondGenSpriteUrls.push(data.sprites.front_default);
        });
    }

    for (var i = 0; i < 9; i++) {
      this.subs.sink = this.pokemonService
        .getPokemonData(252 + i)
        .subscribe((data) => {
          this.thirdGenSpriteUrls.push(data.sprites.front_default);
        });
    }

    for (var i = 0; i < 9; i++) {
      this.subs.sink = this.pokemonService
        .getPokemonData(387 + i)
        .subscribe((data) => {
          this.fourthGenSpriteUrls.push(data.sprites.front_default);
        });
    }

    for (var i = 0; i < 9; i++) {
      this.subs.sink = this.pokemonService
        .getPokemonData(495 + i)
        .subscribe((data) => {
          this.fifthGenSpriteUrls.push(data.sprites.front_default);
        });
    }

    for (var i = 0; i < 9; i++) {
      this.subs.sink = this.pokemonService
        .getPokemonData(650 + i)
        .subscribe((data) => {
          this.sixthGenSpriteUrls.push(data.sprites.front_default);
        });
    }

    for (var i = 0; i < 9; i++) {
      this.subs.sink = this.pokemonService
        .getPokemonData(722 + i)
        .subscribe((data) => {
          this.seventhGenSpriteUrls.push(data.sprites.front_default);
        });
    }
  }

  onClick() {}

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}

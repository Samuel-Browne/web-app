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

  firstGenSpriteUrls: string[] = [];
  secondGenSpriteUrls: string[] = [];

  thirdGenSpriteUrls: string[] = [];
  fourthGenSpriteUrls: string[] = [];
  fifthGenSpriteUrls: string[] = [];
  sixthGenSpriteUrls: string[] = [];
  seventhGenSpriteUrls: string[] = [];

  constructor(private pokemonService: PokemonService, private router: Router) {

    for (let i = 0; i < 9; i++) {
      this.subs.sink = this.pokemonService
        .getPokemonData(1 + i)
        .subscribe((data) => {
          this.firstGenSpriteUrls.push(data.sprites.front_default);
          this.firstGenSpriteUrls.sort();
        });
    }   

    for (let i = 0; i < 9; i++) {
      this.subs.sink = this.pokemonService
        .getPokemonData(152 + i)
        .subscribe((data) => {
          this.secondGenSpriteUrls.push(data.sprites.front_default);
          this.secondGenSpriteUrls.sort();
        });
    }

    for (let i = 0; i < 9; i++) {
      this.subs.sink = this.pokemonService
        .getPokemonData(252 + i)
        .subscribe((data) => {
          this.thirdGenSpriteUrls.push(data.sprites.front_default);
          this.thirdGenSpriteUrls.sort();
        });
    }

    for (let i = 0; i < 9; i++) {
      this.subs.sink = this.pokemonService
        .getPokemonData(387 + i)
        .subscribe((data) => {
          this.fourthGenSpriteUrls.push(data.sprites.front_default);
          this.fourthGenSpriteUrls.sort();
        });
    }

    for (let i = 0; i < 9; i++) {
      this.subs.sink = this.pokemonService
        .getPokemonData(495 + i)
        .subscribe((data) => {
          this.fifthGenSpriteUrls.push(data.sprites.front_default);
          this.fifthGenSpriteUrls.sort();
        });
    }

    for (let i = 0; i < 9; i++) {
      this.subs.sink = this.pokemonService
        .getPokemonData(650 + i)
        .subscribe((data) => {
          this.sixthGenSpriteUrls.push(data.sprites.front_default);
          this.sixthGenSpriteUrls.sort();
        });
    }

    for (let i = 0; i < 9; i++) {
      this.subs.sink = this.pokemonService
        .getPokemonData(722 + i)
        .subscribe((data) => {
          this.seventhGenSpriteUrls.push(data.sprites.front_default);
          this.seventhGenSpriteUrls.sort();
        });
    }
  }

  onClick(sprite: string) {
    this.router.navigate(['/' + sprite]);
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}

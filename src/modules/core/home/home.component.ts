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

    for (let i = 1; i <= 151; i++) {
      this.subs.sink = this.pokemonService
        .getPokemonData(i)
        .pipe(finalize(()=>{
          this.firstGenPokemon.sort();
        }))
        .subscribe((data) => {
          this.firstGenPokemon.push(data);
          this.firstGenPokemon.sort();
        });
        
    }   

    for (let i = 152; i <= 251; i++) {
      this.subs.sink = this.pokemonService
        .getPokemonData(i)
        .subscribe((data) => {
          this.secondGenPokemon.push(data);
          this.secondGenPokemon.sort();
        });
    }

    for (let i = 252; i <=386; i++) {
      this.subs.sink = this.pokemonService
        .getPokemonData(i)
        .subscribe((data) => {
          this.thirdGenPokemon.push(data);
          this.thirdGenPokemon.sort();
        });
    }

    for (let i = 387; i <= 494; i++) {
      this.subs.sink = this.pokemonService
        .getPokemonData(i)
        .subscribe((data) => {
          this.fourthGenPokemon.push(data);
          this.fourthGenPokemon.sort();
        });
    }

    for (let i = 495; i <= 649; i++) {
      this.subs.sink = this.pokemonService
        .getPokemonData(i)
        .subscribe((data) => {
          this.fifthGenPokemon.push(data);
          this.fifthGenPokemon.sort();
        });
    }

    for (let i = 650; i <= 721; i++) {
      this.subs.sink = this.pokemonService
        .getPokemonData(i)
        .subscribe((data) => {
          this.sixthGenPokemon.push(data);
          this.sixthGenPokemon.sort();
        });
    }

    for (let i = 722; i <= 1017; i++) {
      this.subs.sink = this.pokemonService
        .getPokemonData(i)
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

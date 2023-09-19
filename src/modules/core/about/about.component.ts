import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from 'src/modules/shared/services/pokemon.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  pokemon: any;
  id: number;

  constructor(private router: ActivatedRoute ,private pokemonService: PokemonService){
    this.id = this.router.snapshot.params['id'];
    this.pokemonService.getPokemonData(this.id).subscribe(data => {
      this.pokemon = data;
      console.log(this.pokemon);
    });
  
  }
  ngOnInit(){}

}

import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

pictureUrl: string = "";

firstGenSpriteUrls: string[] = [];

secondGenSpriteUrls: string[] = [];

thirdGenSpriteUrls: string[] = [];
fourthGenSpriteUrls: string[] = [];
fifthGenSpriteUrls: string[] = [];
sixthGenSpriteUrls: string[] = [];
seventhGenSpriteUrls: string[] = [];

constructor(private httpClient: HttpClient){

  for(var i = 0; i < 10; i++){
    this.getImage("https://pokeapi.co/api/v2/pokemon/" + i).subscribe(data =>{
      this.firstGenSpriteUrls.push(data.sprites.front_default);
    });
  }

  for(var i = 0; i < 9; i++){
    this.getImage("https://pokeapi.co/api/v2/pokemon/" + (152 + i)).subscribe(data =>{
      this.secondGenSpriteUrls.push(data.sprites.front_default);
    });
  }

  for(var i = 0; i < 9; i++){
    this.getImage("https://pokeapi.co/api/v2/pokemon/" + (252 + i)).subscribe(data =>{
      this.thirdGenSpriteUrls.push(data.sprites.front_default);
    });
  }

  for(var i = 0; i < 9; i++){
    this.getImage("https://pokeapi.co/api/v2/pokemon/" + (387 + i)).subscribe(data =>{
      this.fourthGenSpriteUrls.push(data.sprites.front_default);
    });
  }

  for(var i = 0; i < 9; i++){
    this.getImage("https://pokeapi.co/api/v2/pokemon/" + (495 + i)).subscribe(data =>{
      this.fifthGenSpriteUrls.push(data.sprites.front_default);
    });
  }

  for(var i = 0; i < 9; i++){
    this.getImage("https://pokeapi.co/api/v2/pokemon/" + (650 + i)).subscribe(data =>{
      this.sixthGenSpriteUrls.push(data.sprites.front_default);
    });
  }

  for(var i = 0; i < 9; i++){
    this.getImage("https://pokeapi.co/api/v2/pokemon/" + (722 + i)).subscribe(data =>{
      this.seventhGenSpriteUrls.push(data.sprites.front_default);
    });
  }





}
getImage(imageUrl: string): Observable<any> {
  return this.httpClient.get(imageUrl);
}

onClick(){
  
}

}

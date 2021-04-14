import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html'
})
export class MusicComponent {
  public songs : Music[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Music[]>(baseUrl + 'songs').subscribe(result => {
      this.songs = result;
    }, error => console.error(error));
  }
}

interface Music {
  id: string;
  name: string;
  year: number;
  composer: string;
}

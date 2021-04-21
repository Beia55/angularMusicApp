import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Song } from './music.models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-music-add',
  templateUrl: './music-add.component.html'
})

export class MusicAddComponent {

  public song: Song = <Song>{};

  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string,
    private router: Router) { }

  public saveSong() {
    this.http.post(this.baseUrl + 'api/songs', this.song).subscribe(result => {
      this.router.navigateByUrl("/music");
    }, error => console.error(error))
  }

}

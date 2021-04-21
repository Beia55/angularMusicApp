import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Song } from './music.models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-music-edit',
  templateUrl: './music-edit.component.html'
})

export class MusicEditComponent {

  /*public song: Song = <Song>{};*/

  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string,
    private router: Router) { }

  public editSong(song: Song) {
    this.http.put(this.baseUrl + 'api/songs/', song.id).subscribe(result => {
      this.router.navigateByUrl("/music");
    }, error => console.error(error))
  }

}

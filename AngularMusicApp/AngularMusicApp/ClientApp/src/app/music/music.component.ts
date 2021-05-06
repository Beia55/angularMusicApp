import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Song } from './music.models';



/*export class ButtonOverviewExample { }*/


@Component({
  selector: 'app-music',
  styleUrls: ['./music.component.css'],
  templateUrl: './music.component.html'
})

export class MusicComponent {
  public songs: Song[];

  columnsToDisplay: string[] = [ 'name', 'year', 'composer','actions'];

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
    this.loadMusic();
  }

  public deleteSong(song: Song)
  {
    var ans = confirm("Do you want to delete the song with the name: " + song.name);
    if (ans) {
      this.http.delete(this.baseUrl + 'api/songs/' + song.id).subscribe(result => {
        this.loadMusic();
      }, error => console.error(error));
    }
  }

  public loadMusic ()
  {
    this.http.get<Song[]>(this.baseUrl + 'api/songs').subscribe(result => {
      this.songs = result;
    }, error => console.error(error));
  }
}

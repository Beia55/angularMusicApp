import { Component } from '@angular/core';
import { Song } from './music.models';
import { MusicService } from './music.service';

@Component({
  selector: 'app-music',
  styleUrls: ['./music.component.css'],
  templateUrl: './music.component.html'
})

export class MusicComponent {
  public songs: Song[];

  columnsToDisplay: string[] = [ 'name', 'year', 'composer','actions'];

  constructor(private musicService: MusicService) {
    this.loadMusic();
  }

  public deleteSong(song: Song)
  {
    var ans = confirm("Do you want to delete the song with the name: " + song.name);
    if (ans) {
      this.musicService.deleteSong(song).subscribe(result => {
        this.loadMusic();
      }, error => console.error(error));
    }
  }

  public loadMusic ()
  {
    this.musicService.loadMusic().subscribe(result => {
      this.songs = result;
    }, error => console.error(error));
  }
}

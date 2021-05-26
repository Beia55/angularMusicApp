import { Component } from '@angular/core';
import { Song } from './music.models';
import { Router } from '@angular/router';
import { MusicService } from './music.service';

export class InputOverviewExample { }

@Component({
  selector: 'app-music-add',
  styleUrls: ['./music-add.component.css'],
  templateUrl: './music-add.component.html'
})

export class MusicAddComponent {

  public song: Song = <Song>{};

  constructor(
    private musicService: MusicService,
    private router: Router) { }

  public saveSong() {
    this.musicService.saveSong(this.song).subscribe(result => {
      this.router.navigateByUrl("/music");
    }, error => console.error(error))
  }

}

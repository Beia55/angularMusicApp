import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Song } from './music.models';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

export class InputOverviewExample { }
export class CardFancyExample { }

@Component({
  selector: 'app-music-read',
  styleUrls: ['./music-read.component.css'],
  templateUrl: './music-read.component.html'
})

export class MusicReadComponent implements OnInit {

  public id: string;
  public song: Song = <Song>{};

  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string,
    private router: Router,
    private activateRouter: ActivatedRoute) { }

  ngOnInit() {

    this.activateRouter.params.subscribe(param => {
      this.id = param['id'];
      this.loadSong();
    });
  }

  public loadSong() {
    this.http.get<Song>(this.baseUrl + 'api/songs/' + this.id).subscribe(result => {
      this.song = result;
    }, error => console.error(error))
  }

}

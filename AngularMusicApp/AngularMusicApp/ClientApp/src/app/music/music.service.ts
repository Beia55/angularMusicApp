import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Song } from './music.models';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string)
  { }

  public loadMusic() {
    return this.http.get<Song[]>(this.baseUrl + 'api/songs');
  }

  public deleteSong(song: Song) {
    return this.http.delete(this.baseUrl + 'api/songs/' + song.id);
  }

  public saveSong(song: Song) {
    return this.http.post(this.baseUrl + 'api/songs', song);
  }

  public loadSongByID(id: string) {
    return this.http.get<Song>(this.baseUrl + 'api/songs/' + id);
  }

  public saveEditedSong(id: string, song: Song) {
    return this.http.put<Song>(this.baseUrl + 'api/songs/' + id, song);
  }
}

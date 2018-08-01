import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SongbookService {

  constructor(private http: HttpClient) { }

  getSongs(artist) {
    return this.http.get("http://localhost:8080/KBK/rest/songbook/getSongs/artist/" + artist);
  }
}

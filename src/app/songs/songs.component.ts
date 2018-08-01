import { Component, OnInit, ViewChild } from '@angular/core';
import { SongbookService } from '../songbook.service';
import { Song } from '../songs/song';
import {MatSort, MatTableDataSource, MatTable} from '@angular/material';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class SongsComponent implements OnInit {

  songs: Song[];
  artist: String = "Led Zeppelin";
  displayedColumns: string[] = ['artist', 'language', 'title'];
  dataSource = new MatTableDataSource(this.songs);
  v: String;
  
  constructor(private songbookService: SongbookService) {}

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<any>;
  
  ngOnInit() {
    this.getData();
  }

  onClick() {
    this.getData();
  }

  getData() {
    this.songbookService
      .getSongs(this.artist)
      .subscribe((data: Song[]) => {
          this.songs = data;
          this.dataSource.data = this.songs;
          this.dataSource.sort = this.sort;
        });
  }
}


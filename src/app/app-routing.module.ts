import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SongsComponent } from './songs/songs.component';
import { ArtistsComponent } from './artists/artists.component';

const routes: Routes = [
  {
    path:  'songs',
    component:  SongsComponent,
  },
  {
    path:  'artists',
    component:  ArtistsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

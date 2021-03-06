import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviedetailsPage } from '../moviedetails/moviedetails.page';
import { MovieResolverService } from './movie-resolver.service';

import { MoviePage } from './movie.page';

const routes: Routes = [
  {
    path: '',
    component: MoviePage,
    resolve: {
      data: MovieResolverService,
    },
  },
  {
    path: 'moviedetails/:id',
    loadChildren: () =>
      import('../moviedetails/moviedetails.module').then(
        (m) => m.MoviedetailsPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoviePageRoutingModule {}

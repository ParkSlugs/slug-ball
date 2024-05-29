import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailComponent, UserListComponent } from './features';
import { LiveScoreComponent } from './events/components/live-score/live-score.component';
import { LeagueListComponent } from './events/components/league-list/league-list.component';

const routes: Routes = [
  {
    path: 'admin/users',
    component: UserListComponent
  },
  {
    path: 'admin/users/:id',
    component: UserDetailComponent
  },
  {
    path: 'live',
    component: LiveScoreComponent
  },
  {
    path: 'leagues',
    component: LeagueListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

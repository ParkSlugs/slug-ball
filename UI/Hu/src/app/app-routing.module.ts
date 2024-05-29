import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailComponent } from './features/components/user/user-detail/user-detail.component';
import { LiveScoreComponent } from './events/components/live-score/live-score.component';
import { LeagueListComponent } from './events/components/league-list/league-list.component';
import { UserListComponent } from './features/components/user/user-list/user-list.component';

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

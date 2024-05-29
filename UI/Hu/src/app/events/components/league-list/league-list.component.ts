import { Component, OnDestroy, OnInit } from '@angular/core';
import { UniqueTournament } from '../../models/unique-tournament.model';
import { LiveScoreService } from '../../services/live-score.service';
import { TableColumn } from 'src/app/core/models/table-column.model';
import { League } from '../../models/league.model';
import { ListBaseComponent } from 'src/app/core/component-bases/list-base/list-base.component';

@Component({
  selector: 'app-league-list',
  templateUrl: './league-list.component.html',
  styleUrls: ['./league-list.component.css']
})

export class LeagueListComponent extends ListBaseComponent<League> implements OnInit, OnDestroy {
  
  readonly title: string = 'Leagues'

  override tableColumns: readonly TableColumn<League>[] = [
    {
      columnId: 'name',
      columnName: 'League',
    },{
      columnId: 'region',
      columnName: 'Region',
    }
  ]

  constructor(protected liveScoreService: LiveScoreService) {
    super();
  }

  leagues: League[] = [];

  override loadData(): void {
    this.liveScoreService.getTournaments().subscribe(result => {
      this.leagues = result.uniqueTournaments.map(tournament => {
        return {
          name: tournament.name,
          region: tournament.category.name,
          uniqueTournamentId: tournament.id
        }
      })
    });
  }

}

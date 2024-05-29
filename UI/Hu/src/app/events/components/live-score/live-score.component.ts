import { Component, OnDestroy, OnInit } from '@angular/core';
import { LiveScoreService } from '../../services/live-score.service';
import { Subscription } from 'rxjs';
import { LiveScore } from '../../models/live-score.model';
import { TableColumn } from 'src/app/core/models/table-column.model';
import { ScoreTable } from '../../models/score-table.model';
import { UniqueTournament } from '../../models/unique-tournament.model';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { LiveScoreForm } from '../../form-models/live-score-form.model';

@Component({
  selector: 'app-live-score',
  templateUrl: './live-score.component.html',
  styleUrls: ['./live-score.component.css']
})
export class LiveScoreComponent implements OnInit, OnDestroy {

  private getLiveSubscription? :Subscription;
  private getTournamentsSubscription? :Subscription;

  liveScoreData?: LiveScore;
  isRunning: boolean = false;
  isMidPoll: boolean = false;
  display?: string
  allScores: ScoreTable[] = [];
  displayedScores: ScoreTable[] = [];
  away: string[] = [];
  tournaments: UniqueTournament[] = [];
  form?: FormGroup<LiveScoreForm>;
  constructor(private liveScoreService: LiveScoreService,
              private formBuilder: FormBuilder) {
    
  }

  public tableColumns: ReadonlyArray<TableColumn<ScoreTable>> = [
    {
      columnId: 'tournament',
      columnName: 'Tournament'
    },{
      columnId: 'tournamentID',
      columnName: 'Tournament ID'
    },{
      columnId: 'homeTeam',
      columnName: 'Home Team',
    },{
      columnId: 'homeScore',
    },{
      columnId: 'awayScore'
    },{
      columnId: 'awayTeam',
      columnName: 'Away Team'
    }
  ]

  ngOnInit(): void {
    this.createFormGroupForModel();
    this.getTournamentsSubscription = this.liveScoreService.getTournaments().subscribe({next: (tournaments) => {
      this.tournaments = tournaments.uniqueTournaments;
      this.getLiveSubscription = this.liveScoreService.getLive().subscribe({next: (liveScoreData) => {
        this.liveScoreData = liveScoreData;
        const footballEvents = liveScoreData.events.filter(e => e.homeTeam.sport.name === "Football")
        this.allScores = liveScoreData.events.map(e => { 
          return { 
            homeTeam: e.homeTeam.name,
            awayTeam: e.awayTeam.name,
            homeScore: e.homeScore.current,
            awayScore: e.awayScore.current,
            tournament: e.tournament.name,
            tournamentID: e.tournament.id
          }});
        this.displayedScores = this.allScores;
        }});
    }}); 
  }

  createFormGroupForModel(): void {
    const form = this.formBuilder.nonNullable.group<LiveScoreForm>({
      tournamentId: new FormControl(0)
    });

    form.controls.tournamentId.valueChanges.subscribe(tournamentId => {
      this.filterLiveScore(tournamentId);
    });

    this.form = form;
  }

  filterLiveScore(tournamentID: number | null | undefined) {
    if (tournamentID !== 0) {
      this.displayedScores = this.allScores.filter(score => score.tournamentID === tournamentID)
    }
    else {
      this.displayedScores = this.allScores;
    }
  }

  ngOnDestroy(): void {
    this.getTournamentsSubscription?.unsubscribe();
    this.getLiveSubscription?.unsubscribe();
  }
  
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LiveScore } from '../models/live-score.model';
import { UniqueTournament } from '../models/unique-tournament.model';

@Injectable({
  providedIn: 'root'
})
export class LiveScoreService {

  constructor(private httpClient: HttpClient) { }

  getStandings(): Observable<any> {
    return this.httpClient.get('https://api.sofascore.com/api/v1/unique-tournament/17/season/52186/standings/total');
  }

  getLive(): Observable<LiveScore> {
    return this.httpClient.get<LiveScore>('https://api.sofascore.com/api/v1/sport/football/events/live');
  }

  getTournaments(): Observable<{uniqueTournaments: UniqueTournament[]}> {
    return this.httpClient.get<{uniqueTournaments: UniqueTournament[]}>('https://api.sofascore.com/api/v1/config/top-unique-tournaments/GB/football');
  }

}

import { Time } from "@angular/common";
import { RoundInfo } from "./round-info.model";
import { Score } from './score.model'
import { Season } from "./season.model";
import { Status } from "./status.model";
import { Team } from "./team.model";
import { Tournament } from "./tournament.model";
import { Changes } from "./changes.model";
import { StatusTime } from "./status-time.model";
import { LastPeriod } from "./last-period.model";

export interface Event {
    tournament:                      Tournament;
    season?:                         Season;
    roundInfo?:                      RoundInfo;
    customId:                        string;
    status:                          Status;
    homeTeam:                        Team;
    awayTeam:                        Team;
    homeScore:                       Score;
    awayScore:                       Score;
    time:                            Time;
    changes:                         Changes;
    hasGlobalHighlights:             boolean;
    hasXg?:                          boolean;
    hasEventPlayerStatistics?:       boolean;
    hasEventPlayerHeatMap?:          boolean;
    detailId?:                       number;
    crowdsourcingDataDisplayEnabled: boolean;
    id:                              number;
    statusTime?:                     StatusTime;
    crowdsourcingEnabled:            boolean;
    startTimestamp:                  number;
    slug:                            string;
    lastPeriod?:                     LastPeriod;
    finalResultOnly:                 boolean;
    isEditor?:                       boolean;
    coverage?:                       number;
    awayRedCards?:                   number;
    homeRedCards?:                   number;
}
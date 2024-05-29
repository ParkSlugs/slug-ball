export interface LiveResponse {
    events: Event[];
}

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
    homeRedCards?:                   number;
    awayRedCards?:                   number;
}

export interface Score {
    current:     number;
    display:     number;
    period1?:    number;
    period2?:    number;
    normaltime?: number;
}

export interface Team {
    name:               string;
    slug:               string;
    shortName:          string;
    gender?:            Gender;
    sport:              Sport;
    userCount:          number;
    nameCode:           string;
    disabled?:          boolean;
    national:           boolean;
    type:               number;
    id:                 number;
    country:            Country;
    subTeams:           any[];
    teamColors:         TeamColors;
    fieldTranslations?: FieldTranslations;
}

export interface Country {
    alpha2?: Alpha2;
    name?:   CountryName;
}

export enum Alpha2 {
    Au = "AU",
    CN = "CN",
    Hk = "HK",
    ID = "ID",
    Jp = "JP",
    Kr = "KR",
    Mn = "MN",
}

export enum CountryName {
    Australia = "Australia",
    China = "China",
    HongKong = "Hong Kong",
    Indonesia = "Indonesia",
    Japan = "Japan",
    Mongolia = "Mongolia",
    SouthKorea = "South Korea",
}

export interface FieldTranslations {
    nameTranslation:      NameTranslation;
    shortNameTranslation: ShortNameTranslation;
}

export interface NameTranslation {
    ar: string;
}

export interface ShortNameTranslation {
}

export enum Gender {
    F = "F",
    M = "M",
}

export interface Sport {
    name: SportName;
    slug: Slug;
    id:   number;
}

export enum SportName {
    Football = "Football",
}

export enum Slug {
    Football = "football",
}

export interface TeamColors {
    primary:   string;
    secondary: string;
    text:      string;
}

export interface Changes {
    changes:         Change[];
    changeTimestamp: number;
}

export enum Change {
    AwayScoreCurrent = "awayScore.current",
    AwayScoreDisplay = "awayScore.display",
    AwayScoreNormaltime = "awayScore.normaltime",
    AwayScorePeriod1 = "awayScore.period1",
    AwayScorePeriod2 = "awayScore.period2",
    HomeScoreCurrent = "homeScore.current",
    HomeScoreDisplay = "homeScore.display",
    HomeScoreNormaltime = "homeScore.normaltime",
    HomeScorePeriod1 = "homeScore.period1",
    HomeScorePeriod2 = "homeScore.period2",
    StatusCode = "status.code",
    StatusDescription = "status.description",
    StatusType = "status.type",
    TimeCurrentPeriodStart = "time.currentPeriodStart",
    TimePeriod1Start = "time.period1Start",
    TimePeriod2Start = "time.period2Start",
}

export enum LastPeriod {
    Period1 = "period1",
    Period2 = "period2",
}

export interface RoundInfo {
    round: number;
}

export interface Season {
    name:   string;
    year:   string;
    editor: boolean;
    id:     number;
}

export interface Status {
    code:        number;
    description: Description;
    type:        Type;
}

export enum Description {
    Halftime = "Halftime",
    The1StHalf = "1st half",
    The2NdHalf = "2nd half",
}

export enum Type {
    Inprogress = "inprogress",
}

export interface StatusTime {
    prefix:    string;
    initial:   number;
    max:       number;
    timestamp: number;
    extra:     number;
}

export interface Time {
    injuryTime1?:                number;
    initial?:                    number;
    max?:                        number;
    extra?:                      number;
    currentPeriodStartTimestamp: number;
}

export interface Tournament {
    name:              string;
    slug:              string;
    category:          Category;
    uniqueTournament?: UniqueTournament;
    priority:          number;
    id:                number;
}

export interface Category {
    name:    CountryName;
    slug:    Flag;
    sport:   Sport;
    id:      number;
    country: Country;
    flag:    Flag;
    alpha2:  Alpha2;
}

export enum Flag {
    Australia = "australia",
    China = "china",
    HongKong = "hong-kong",
    Indonesia = "indonesia",
    Japan = "japan",
    Mongolia = "mongolia",
    SouthKorea = "south-korea",
}

export interface UniqueTournament {
    name:                        string;
    slug:                        string;
    primaryColorHex?:            string;
    secondaryColorHex?:          string;
    category:                    Category;
    userCount:                   number;
    id:                          number;
    country:                     ShortNameTranslation;
    hasEventPlayerStatistics:    boolean;
    crowdsourcingEnabled:        boolean;
    hasPerformanceGraphFeature:  boolean;
    displayInverseHomeAwayTeams: boolean;
}

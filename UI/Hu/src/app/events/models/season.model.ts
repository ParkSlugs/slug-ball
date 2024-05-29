import { SeasonCoverageInfo } from "./season-coverage-info.model";

export interface Season {
    name:                string;
    year:                string;
    editor:              boolean;
    id:                  number;
    seasonCoverageInfo?: SeasonCoverageInfo;
}
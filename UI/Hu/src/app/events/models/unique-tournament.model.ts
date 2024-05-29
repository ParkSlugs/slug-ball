import { Category } from "./category.model";
import { ShortNameTranslation } from "./short-name-translation.model";

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
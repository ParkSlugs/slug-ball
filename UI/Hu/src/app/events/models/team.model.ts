import { Gender } from "../enums/gender.enum";
import { Country } from "./country-model";
import { FieldTranslations } from "./field-translation.model";
import { Sport } from "./sport-model";
import { TeamColors } from "./team-colors.model";

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
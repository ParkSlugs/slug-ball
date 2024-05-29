import { Country } from "./country-model";
import { Sport } from "./sport-model";

export interface Category {
    name:    string;
    slug:    string;
    sport:   Sport;
    id:      number;
    country: Country;
    flag:    string;
    alpha2?: string;
}
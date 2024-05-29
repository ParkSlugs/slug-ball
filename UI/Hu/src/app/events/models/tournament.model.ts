import { Category } from "./category.model";
import { UniqueTournament } from "./unique-tournament.model";

export interface Tournament {
    name:              string;
    slug:              string;
    category:          Category;
    uniqueTournament?: UniqueTournament;
    priority:          number;
    isLive:            boolean;
    id:                number;
}
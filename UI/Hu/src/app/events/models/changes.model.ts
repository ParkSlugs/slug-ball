import { Change } from "../enums/change.enum";

export interface Changes {
    changes?:        Change[];
    changeTimestamp: number;
}
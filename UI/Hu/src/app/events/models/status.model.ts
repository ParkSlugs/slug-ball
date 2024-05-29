import { Type } from "../enums/type.enum";
import { Description } from "./description.model";

export interface Status {
    code:        number;
    description: Description;
    type:        Type;
}
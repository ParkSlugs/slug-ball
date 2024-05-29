import { Name } from "../enums/name.enum";
import { Slug } from "../enums/slug.enum";

export interface Sport {
    name: Name;
    slug: Slug;
    id:   number;
}
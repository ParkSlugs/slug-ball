import { InputType } from "../enums/input-type.enum";

export class TableColumn<T> {
    columnId!: string;
    isSortHeader?: boolean;
    routerLink?: string;
    attachValueToRouterLink?: boolean;
    formatFunction?: { (input: T): string };
    columnName?: string;
    dataType?: InputType; 
}
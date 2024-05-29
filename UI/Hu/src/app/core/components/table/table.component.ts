import { Component, Input, OnInit } from '@angular/core';
import { TableColumn } from '../../models/table-column.model';
import { InputType } from '../../enums/input-type.enum';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent<T> implements OnInit {
  @Input() columns: ReadonlyArray<TableColumn<T>> = [];
  @Input() items: T[] = [];
  columnsToDisplay: string[] = []

  ngOnInit(): void {
    this.columnsToDisplay = this.columns.map(col => col.columnId);
  }

  getRouterLink(element: any, col: TableColumn<T>): string | any[] | null | undefined {
      return col.attachValueToRouterLink ? [col.routerLink, element[col.columnId]] : [col.routerLink];
  }

  getValue(element: any, col: TableColumn<T>): string{
    if(col.dataType === InputType.Date && !col.formatFunction){
      return formatDate(<Date>element[col.columnId], 'dd/MM/yyyy', 'en-GB')
    }
    return col.formatFunction ? col.formatFunction(element) : element[col.columnId]
  }
}

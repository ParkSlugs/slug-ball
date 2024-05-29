
import { OnDestroy, OnInit, Directive, Input } from '@angular/core';
import { Entity } from '../../models/entity.model';
import { TableColumn } from '../../models/table-column.model';


@Directive()
export abstract class EntityListBaseComponent<T extends Entity> implements OnInit, OnDestroy {

  constructor() {}

  ngOnInit() {
      this.loadData();
  }

  abstract tableColumns: ReadonlyArray<TableColumn<T>>;

  abstract loadData(): void;

  ngOnDestroy() { }
}
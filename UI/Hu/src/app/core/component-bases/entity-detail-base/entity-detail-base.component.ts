
import { OnDestroy, OnInit, Directive, Input } from '@angular/core';
import { Entity } from '../../models/entity.model';
import { AbstractControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';


@Directive()
export abstract class EntityDetailBaseComponent<T extends Entity, S extends { [K in keyof S]: AbstractControl<any, any>; } > implements OnInit, OnDestroy {

  constructor(  protected entityType: { new(): T; },
                protected route: ActivatedRoute) {
  }

  @Input() entity: T | undefined;
  model: T | undefined;
  form: FormGroup<S> | undefined;

  isReadOnly: boolean = false;
  canDeleteEntity: boolean = true;

  ngOnInit(): void {
    this.initialiseEntityModel();
  }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  initialiseEntityModel() {
    this.route.paramMap.subscribe({next: (params: ParamMap) => {
      if(+(params.get('id') ?? 0) !== 0){
        this.getEntity(+(params.get('id') ?? 0)).subscribe({next: (entity) => {
           this.entity = entity;
           this.setModel(this.entity);
        }});
      }
      else {
        this.setModel(this.createNew());
      }
    }});
  }

  abstract createFormGroupForModel(model: T): FormGroup<S>

  createNew(): T {
    const newItem = new this.entityType();
    newItem.id = 0;
    return newItem;
  }

  protected getFormModelForSubmission(): T {
    const item = <T>this.form?.value;
    return item;
  }

  protected setModel(model: T) {
    this.model = model;
    this.form = this.createFormGroupForModel(this.model);
  }

  onSubmit() {
    const item = this.getFormModelForSubmission();
    this.submit(item);
  }

  abstract submit(item: T): void;

  abstract getEntity(id: number): Observable<T>;
}
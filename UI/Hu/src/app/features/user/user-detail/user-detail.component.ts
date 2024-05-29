import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup  } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { EntityDetailBaseComponent } from 'src/app/core';
import { User } from '../../models';
import { UserForm } from '../../form-models/user-form.model';
import { UserService } from '../../services';
import { Gender } from '../../enums';


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent extends EntityDetailBaseComponent<User, UserForm> implements OnInit, OnDestroy  {

  genderEnum: typeof Gender = Gender;
  private addSubscription?: Subscription;
  private getSubscription?: Subscription;

  constructor(private userService: UserService,
              private formBuilder: FormBuilder,
              route: ActivatedRoute) {
      super(User, route);
  } 

  override createFormGroupForModel(entity: User): FormGroup<UserForm> {
    const form = this.formBuilder.nonNullable.group<UserForm>({
      id: new FormControl(entity.id),
      userName: new FormControl(entity.userName),
      password: new FormControl(entity.password),
      firstName: new FormControl(entity.firstName),
      surname: new FormControl(entity.surname),
      dateOfBirth: new FormControl(entity.dateOfBirth),
      mumsName: new FormControl(entity.mumsName),
      email: new FormControl(entity.email),
      gender: new FormControl(entity.gender)
    });

    return form;
  }

  submit(user: User) {
    if(this.userService.isNewEntity(user)){
      this.addSubscription = this.userService.insert(user).subscribe();
    }
    else{
      this.addSubscription = this.userService.update(user).subscribe();
    }
  }

  protected override getFormModelForSubmission(): User {
    const user = super.getFormModelForSubmission();
    if (this.userService.isNewEntity(user)){
      user.id = null;
    }
    return user;
  }

  override getEntity(id: number): Observable<User> {
    return this.userService.get(id);
  }

  override ngOnDestroy(): void {
    this.addSubscription?.unsubscribe();
    this.getSubscription?.unsubscribe();
  }
}

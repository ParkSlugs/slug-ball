import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from '../../../models';
import { UserService } from '../../../services';
import { EntityListBaseComponent } from '../../../../core/component-bases/entity-list-base/entity-list-base.component'
import { TableColumn } from '../../../../core/models/table-column.model';
import { InputType } from '../../../../core/enums/input-type.enum';
import { Gender } from '../../../enums';
import { TableComponent } from '../../../../core/components/table/table.component'

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent extends EntityListBaseComponent<User> implements OnInit {

  private getSubscription?: Subscription;

  constructor(protected userService: UserService) {
    super();
  }

  public users?: User[];
  public tableColumns: ReadonlyArray<TableColumn<User>> = [
    {
      columnId: 'id',
      isSortHeader: true,
      routerLink: '/admin/users',
      attachValueToRouterLink: true,
      columnName: 'ID',
    },{
      columnId: 'userName',
      isSortHeader: true,
      columnName: 'UserName',
    },{
      columnId: 'firstName',
      isSortHeader: true,
      columnName: 'First Name',
    },{
      columnId: 'surname',
      isSortHeader: true,
      columnName: 'Surname',
    },{
      columnId: 'password',
      isSortHeader: true,
      columnName: 'Password',
    },{
      columnId: 'mumsName',
      isSortHeader: true,
      columnName: 'Mums Name',
    },{
      columnId: 'dateOfBirth',
      isSortHeader: true,
      columnName: 'Date Of Birth',
      dataType: InputType.Date
    },{
      columnId: 'email',
      isSortHeader: true,
      columnName: 'Email',
    },{
      columnId: 'gender',
      isSortHeader: true,
      columnName: 'Gender',
      formatFunction: (user: User) => this.getGender(user.gender) ?? ''
    }
  ]
  public readonly title: string = 'Users'

  override ngOnInit() {
    this.loadData();
  }

  override loadData(): void {
    this.userService.getAll().subscribe(users => this.users = users);
  }

  getGender(gender: Gender | undefined): string | undefined {
    return Gender.getDescription(gender);
  }

  override ngOnDestroy(): void {
    this.getSubscription?.unsubscribe();
  }

}

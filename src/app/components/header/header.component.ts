import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { ToggleMenuExpanded } from '../../store/menu-state';
import { SelectItem } from 'primeng/api';
import { Roles } from '../../models/roles';
import { SetActiveRole } from '../../store/user-state';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  public roleOptions: SelectItem[];

  constructor(private store: Store) {
    this.initRoleOptions();
  }

  private initRoleOptions(): void {
    this.roleOptions = [
      { label: 'Látogató', value: Roles.readonly },
      { label: 'Felhasználó', value: Roles.user },
      { label: 'Adminisztrátor', value: Roles.admin },
    ];
  }

  public toggleMenu(): void {
    this.store.dispatch(new ToggleMenuExpanded());
  }

  public setSelectedRole(changeEvent: { originalEvent: Event, value: Roles }): void {
    const selectedRole = changeEvent.value;
    this.store.dispatch(new SetActiveRole(selectedRole));
  }

}

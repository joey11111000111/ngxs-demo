import { Component } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { Roles } from '../../models/roles';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  public roleOptions: SelectItem[];

  constructor() {
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
  }

  public setSelectedRole(changeEvent: { originalEvent: Event, value: Roles }): void {
    const selectedRole = changeEvent.value;
    console.log('--- selected role ---\n', selectedRole);
  }

}

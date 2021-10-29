import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { MenuItem } from 'primeng/api';
import { SetMenuItems } from './store/menu-state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngxs-demo';

  constructor(private store: Store) {
    const menuItems: MenuItem[] = [
      { label: 'Lista', routerLink: '/list' },
      { label: 'Valami', routerLink: '/detail/1' },
    ];
    this.store.dispatch(new SetMenuItems(menuItems));
  }


}

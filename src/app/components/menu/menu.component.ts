import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenuState } from '../../store/menu-state';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  @Select(MenuState.menuItems)
  public menuItems: Observable<MenuItem[]>;

  @Select(MenuState.expanded)
  public expanded: Observable<boolean>;

  constructor() {
  }

}

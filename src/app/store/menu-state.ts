import { Action, Selector, State, StateContext } from '@ngxs/store';
import { MenuItem } from 'primeng/api';

export interface MenuModel {

  expanded: boolean;
  menuItems: MenuItem[];

}

export class SetMenuExpanded {
  public static readonly type = '[MENU] setMenuExpanded';
  constructor(public readonly expanded: boolean) {}
}

export class ToggleMenuExpanded {
  public static readonly type = '[MENU] toggleMenuExpanded';
}

export class SetMenuItems {
  public static readonly type = '[MENU] setMenuItems';
  constructor(public readonly menuItems: MenuItem[]) {}
}


@State<MenuModel>({
  name: 'menu',
  defaults: { expanded: true, menuItems: [] }
})
export class MenuState {

  @Selector()
  public static expanded(state: MenuModel): boolean {
    return state.expanded;
  }

  @Selector()
  public static menuItems(state: MenuModel): MenuItem[] {
    return state.menuItems;
  }

  @Action(SetMenuExpanded)
  public setMenuExpanded(ctx: StateContext<MenuModel>, action: SetMenuExpanded): void {
    ctx.patchState({ expanded: action.expanded });
  }

  @Action(ToggleMenuExpanded)
  public toggleMenuExpanded(ctx: StateContext<MenuModel>, action: ToggleMenuExpanded): void {
    ctx.patchState({ expanded: !ctx.getState().expanded });
  }

  @Action(SetMenuItems)
  public setMenuItems(ctx: StateContext<MenuModel>, action: SetMenuItems): void {
    ctx.patchState({ menuItems: action.menuItems });
  }

}

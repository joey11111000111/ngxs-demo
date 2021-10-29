import { Roles } from '../models/roles';
import { Action, Selector, State, StateContext } from '@ngxs/store';

export interface UserModel {

  activeRole: Roles;

}

export class SetActiveRole {
  public static readonly type = '[USER] setActiveRole';
  constructor(public readonly activeRole: Roles) {}
}

@State<UserModel>({
  name: 'user',
  defaults: { activeRole: Roles.readonly }
})
export class UserState {

  @Selector()
  public static activeUserRole(state: UserModel): Roles {
    return state.activeRole;
  }

  @Action(SetActiveRole)
  public setActiveRole(ctx: StateContext<UserModel>, action: SetActiveRole): void {
    ctx.patchState({ activeRole: action.activeRole });
  }

}

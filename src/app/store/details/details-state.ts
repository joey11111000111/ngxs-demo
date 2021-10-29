import { Action, Selector, State, StateContext } from '@ngxs/store';
import { DetailModel } from '../../models/DetailModel';
import { Injectable } from '@angular/core';
import { PersonalDataModel } from '../../models/personal-data-model';
import { ContactDataModel } from '../../models/contact-data-model';
import { ActivityModel } from '../../models/activity-model';
import { DetailServiceService } from '../../services/detail-service.service';

export class LoadDetails {
  public static readonly type = '[DETAIL] loadDetails';
  constructor(public readonly id: number) {}
}

export class SetPersonalData {
  public static readonly type = '[DETAIL] setPersonalData';
  constructor(public readonly payload: PersonalDataModel) {}
}

export class SetContactData {
  public static readonly type = '[DETAIL] setPersonalData';
  constructor(public readonly payload: ContactDataModel) {}
}

export class SetActivities {
  public static readonly type = '[DETAIL] setPersonalData';
  constructor(public readonly payload: ActivityModel[]) {}
}

@State<DetailModel>({
  name: 'detail',
  defaults: {
    id: null,
    personalData: null,
    contactData: null,
    activities: []
  }
})
@Injectable()
export class DetailsState {

  @Selector()
  public static personalData(state: DetailModel): PersonalDataModel {
    return state.personalData;
  }

  @Selector()
  public static contactData(state: DetailModel): ContactDataModel {
    return state.contactData;
  }

  @Selector()
  public static activities(state: DetailModel): ActivityModel[] {
    return state.activities;
  }

  @Selector()
  public static getDetails(state: DetailModel): DetailModel {
    return state;
  }

  constructor(private detailService: DetailServiceService) {
  }

  @Action(LoadDetails)
  public loadDetails(ctx: StateContext<DetailModel>, action: LoadDetails): Promise<void> {
    return this.detailService.loadDetailsFor(action.id).toPromise()
      .then(response => {
        ctx.setState(response);
      });
  }

  @Action(SetPersonalData)
  public setPersonalData(ctx: StateContext<DetailModel>, action: SetPersonalData): void {
    ctx.patchState({ personalData: action.payload });
  }

  @Action(SetContactData)
  public setContactData(ctx: StateContext<DetailModel>, action: SetContactData): void {
    ctx.patchState({ contactData: action.payload });
  }

  @Action(SetActivities)
  public setActivities(ctx: StateContext<DetailModel>, action: SetActivities): void {
    ctx.patchState({ activities: action.payload });
  }

}

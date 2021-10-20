import { PersonalDataModel } from './personal-data-model';
import { ContactDataModel } from './contact-data-model';
import { ActivityModel } from './activity-model';

export interface DetailModel {

  personalData: PersonalDataModel;
  contactData: ContactDataModel;
  activities?: ActivityModel[];

}

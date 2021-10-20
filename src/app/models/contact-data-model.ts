import { AddressModel } from './DetailModel';

export interface ContactDataModel {

  phoneNumber: string;
  email: string;
  preferredWay: string;
  address: AddressModel;

}

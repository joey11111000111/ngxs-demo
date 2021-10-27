import { AddressModel } from './address-model';

export interface ContactDataModel {

  phoneNumber: string;
  email: string;
  preferredWay: string;
  address: AddressModel;

}

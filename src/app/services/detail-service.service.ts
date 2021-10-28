import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DetailModel } from '../models/DetailModel';
import { Gender } from '../models/gender';

@Injectable({
  providedIn: 'root'
})
export class DetailServiceService {

  private mockDataById: Map<number, DetailModel>;

  constructor() {
    this.initMockData();
  }

  private initMockData(): void {
    this.mockDataById = new Map<number, DetailModel>();
    this.mockDataById.set(1, {
      id: 1,
      personalData: {
        firstName: 'Bojána',
        lastName: 'Kvintovics',
        birthDate: new Date('1994-02-13'),
        gender: Gender.female
      },
      contactData: {
        phoneNumber: '30 566 2389',
        email: 'kvboj@freemail.hu',
        preferredWay: 'PHONE',
        address: {
          country: 'Ukrajna',
          zipCode: 'UK3233489',
          city: 'Kirovohrad',
          street: 'Kiyvs\'ka st.',
          houseNumber: 12
        }
      },
      activities: [
        {
          name: 'Hegymászás',
          description: 'Biztosító kötél nélkül, a függőleges, sima sziklafalakon, melyek látványa egyeseket megrémiszt, másokat viszont pánikba ejt.',
          startDate: new Date('2011-06-22'),
          endDate: null
        }
      ]
    });

    this.mockDataById.set(2, {
      id: 2,
      personalData: {
        firstName: 'Jonathan',
        lastName: 'Laurent',
        birthDate: new Date('1989-05-22'),
        gender: Gender.male
      },
      contactData: {
        phoneNumber: '20 167 4350',
        email: 'lathan@gmail.com',
        preferredWay: 'EMAIL',
        address: {
          country: 'Kanada',
          zipCode: 'KA335',
          city: 'Vernon',
          street: 'Berardi Rd.',
          houseNumber: 5
        }
      },
      activities: [
        {
          name: 'Futás',
          description: 'Rövid távú sprint és hosszú távú hegyi futás.',
          startDate: new Date('1999-09-17'),
          endDate: new Date('2005-02-28')
        },
        {
          name: 'Testépítés',
          description: 'Agyagból, viaszból, gyantából és fából különféle testek megformázása.',
          startDate: new Date('2006-03-07'),
          endDate: new Date('2008-01-11')
        },
        {
          name: 'Sárkányrepülés',
          description: 'Távrepülés motor nélküli sárkánnyal',
          startDate: new Date('2012-07-12'),
          endDate: null
        },
      ]
    });
  }

  public loadDetailsFor(id: number): Observable<DetailModel> {
    return of(this.mockDataById.get(id));
  }

}

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ListModel } from '../models/list-model';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  private dateFormat = 'yyyy.MM.dd.';

  constructor(private dp: DatePipe) { }

  public loadList(): Observable<ListModel[]> {
    return of([
      {
        id: 1,
        lastName: 'Kvintovics',
        firstName: 'Bojána',
        gender: 'nő',
        birthDate: this.dp.transform(new Date('1994-02-13'), this.dateFormat),
        email: 'kvboj@freemail.hu',
        phoneNumber: '30 566 2389'
      },
      {
        id: 2,
        lastName: 'Laurent',
        firstName: 'Jonathan',
        gender: 'férfi',
        birthDate: this.dp.transform(new Date('1989-05-22'), this.dateFormat),
        email: 'lathan@gmail.com',
        phoneNumber: '20 167 4350'
      }
    ] as ListModel[]);
  }

}

import { Component } from '@angular/core';
import { ListModel } from '../../models/list-model';
import { ListService } from '../../services/list.service';
import { Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { ListState, LoadTableData } from '../../store/details/list-state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  @Select(ListState.tableData)
  public value: Observable<ListModel[]>;

  public cols: { field: string, header: string }[];

  constructor(private listService: ListService, private router: Router, private store: Store) {
    this.cols = [
      { field: 'lastName', header: 'Családnév' },
      { field: 'firstName', header: 'Keresztnév' },
      { field: 'gender', header: 'Nem' },
      { field: 'birthDate', header: 'Születési dátum' },
      { field: 'phoneNumber', header: 'Telefonszám' },
      { field: 'email', header: 'e-mail' },
    ];
    this.store.dispatch(new LoadTableData());
  }


  public navigateToDetailView(selectedItem: ListModel): void {
    this.router.navigate([`detail/${selectedItem.id}`]);
  }

}

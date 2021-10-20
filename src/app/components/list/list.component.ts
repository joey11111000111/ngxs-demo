import { Component } from '@angular/core';
import { ListModel } from '../../models/list-model';
import { ListService } from '../../services/list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  public value: ListModel[];
  public cols: { field: string, header: string }[];

  constructor(private listService: ListService, private router: Router) {
    this.listService.loadList().toPromise()
      .then(values => {
        this.value = values;
      });

    this.cols = [
      { field: 'lastName', header: 'Családnév' },
      { field: 'firstName', header: 'Keresztnév' },
      { field: 'gender', header: 'Nem' },
      { field: 'birthDate', header: 'Születési dátum' },
      { field: 'phoneNumber', header: 'Telefonszám' },
      { field: 'email', header: 'e-mail' },
    ];
  }

  public navigateToDetailView(selectedItem: ListModel): void {
    this.router.navigate([`detail/${selectedItem.id}`]);
  }

}

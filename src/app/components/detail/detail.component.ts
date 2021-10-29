import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { LoadDetails } from '../../store/details/details-state';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {

  private id: number;

  constructor(private activatedRoute: ActivatedRoute, private store: Store) {
    this.id = +this.activatedRoute.snapshot.params.id;
    this.store.dispatch(new LoadDetails(this.id));
  }

}

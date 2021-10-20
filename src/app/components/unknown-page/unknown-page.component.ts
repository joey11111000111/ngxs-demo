import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-unknown-page',
  templateUrl: './unknown-page.component.html',
  styleUrls: ['./unknown-page.component.scss']
})
export class UnknownPageComponent implements OnInit {

  public currentRoute: any;

  constructor(private activatedRoute: ActivatedRoute) {
    this.currentRoute = this.activatedRoute.snapshot.url.join('/');
  }

  ngOnInit(): void {
  }

}

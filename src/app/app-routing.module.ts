import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UnknownPageComponent } from './components/unknown-page/unknown-page.component';
import { ListComponent } from './components/list/list.component';
import { DetailComponent } from './components/detail/detail.component';


const routes: Routes = [
  { path: 'list', component: ListComponent },
  {
    path: 'detail',
    children: [
      {
        path: ':id',
        component: DetailComponent
      }
    ]
  },
  { path: '**', component: UnknownPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

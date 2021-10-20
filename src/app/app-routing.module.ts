import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UnknownPageComponent } from './components/unknown-page/unknown-page.component';


const routes: Routes = [
  { path: '**', component: UnknownPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

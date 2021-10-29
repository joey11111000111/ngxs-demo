import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { ButtonModule } from 'primeng/button';
import { MultiSelectModule } from 'primeng/multiselect';
import { UnknownPageComponent } from './components/unknown-page/unknown-page.component';
import { DatePipe, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { ListComponent } from './components/list/list.component';
import { TableModule } from 'primeng/table';
import { DetailComponent } from './components/detail/detail.component';
import { PersonalDataComponent } from './components/personal-data/personal-data.component';
import { ContactDataComponent } from './components/contact-data/contact-data.component';
import { ActivitiesComponent } from './components/activities/activities.component';
import { TabViewModule } from 'primeng/tabview';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { SelectButtonModule } from 'primeng/selectbutton';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MenuState } from './store/menu-state';
import { environment } from '../environments/environment';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { UserState } from './store/user-state';
import { ListState } from './store/details/list-state';
import { DetailsState } from './store/details/details-state';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    UnknownPageComponent,
    ListComponent,
    DetailComponent,
    PersonalDataComponent,
    ContactDataComponent,
    ActivitiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    NgxsModule.forRoot([MenuState, UserState, ListState, DetailsState], {
      developmentMode: !environment.production
    }),
    NgxsReduxDevtoolsPluginModule.forRoot(),

    // PrimeNG modules
    ButtonModule,
    MultiSelectModule,
    TableModule,
    TabViewModule,
    ReactiveFormsModule,
    InputTextModule,
    CalendarModule,
    SelectButtonModule,
    DropdownModule,
    InputTextareaModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

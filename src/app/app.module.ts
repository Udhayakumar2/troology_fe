import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TablesComponent } from './components/tables/tables.component';
import { MaterialModule } from './module/material/material.module';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table'; 
import {MatDialogModule} from '@angular/material/dialog'; 
import { ReactiveFormsModule } from '@angular/forms';
import { StateListComponent } from './components/state-list/state-list.component';
import { AddEditPopUpComponent } from './components/add-edit-pop-up/add-edit-pop-up.component';
import { DistrictListComponent } from './components/district-list/district-list.component';
import { BlockListComponent } from './components/block-list/block-list.component';
import { HttpClientModule } from '@angular/common/http';
import {MatSelectModule} from '@angular/material/select'; 
import { MatInputModule } from '@angular/material/input';
import { VillageListComponent } from './components/village-list/village-list.component';
import { AlertPopUpComponent } from './components/alert-pop-up/alert-pop-up.component'; 
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TablesComponent,
    StateListComponent,
    AddEditPopUpComponent,
    DistrictListComponent,
    BlockListComponent,
    VillageListComponent,
    AlertPopUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatTabsModule,
    MatTableModule,
    MatDialogModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSelectModule,
    MatInputModule,
    ToastrModule.forRoot({
      timeOut: 1500,
      positionClass: 'toast-bottom-right',
      maxOpened: 1,
      preventDuplicates: true
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

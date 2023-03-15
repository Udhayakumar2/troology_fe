import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPortalComponent } from './components/login-portal/login-portal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TablesComponent } from './components/tables/tables.component';
import { MaterialModule } from './module/material/material.module';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table'; 
import {MatDialogModule} from '@angular/material/dialog'; 
import { ReactiveFormsModule } from '@angular/forms';
import { StateListComponent } from './components/state-list/state-list.component';
import { StatePopUpComponent } from './components/state-pop-up/state-pop-up.component';
import { DistrictListComponent } from './components/district-list/district-list.component';
import { BlockListComponent } from './components/block-list/block-list.component';
import { HttpClientModule } from '@angular/common/http';
import {MatSelectModule} from '@angular/material/select'; 
import { VillageListComponent } from './components/village-list/village-list.component';
import { AlertPopUpComponent } from './components/alert-pop-up/alert-pop-up.component'; 

@NgModule({
  declarations: [
    AppComponent,
    LoginPortalComponent,
    TablesComponent,
    StateListComponent,
    StatePopUpComponent,
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
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { TravelService } from './services/travel.service';
import { HttpModule } from './http.module';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AddComponent } from './components/add/add.component';
import { ListComponent } from './pages/list/list.component';
import { ResultComponent } from './pages/result/result.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { JsonPipe } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    ListComponent,
    ResultComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule,
    JsonPipe,
    HttpClientModule,
    CommonModule,
    HttpModule.forRoot({ environment }),
    FontAwesomeModule,
    RouterModule,
  ],

  providers: [TravelService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}

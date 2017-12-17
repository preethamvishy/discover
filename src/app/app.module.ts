import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SafePipe } from '../pipes/safe.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { 
  MatCardModule, 
  MatButtonModule,
  MatIconModule,

} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    SafePipe
    
  ],
  imports: [
    BrowserModule, 
    BrowserAnimationsModule,
    HttpModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

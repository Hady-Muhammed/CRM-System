import { LoaderComponent } from './../components/loader/loader.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PipeComponent } from 'src/components/pipe/pipe.component';
import { DealComponent } from 'src/components/deal/deal.component';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, PipeComponent, DealComponent, LoaderComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    DragDropModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

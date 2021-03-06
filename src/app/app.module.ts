import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { DistContentComponent } from './component/dist-content/dist-content.component';
import { TestCompontComponent } from './component/test-compont/test-compont.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DistContentComponent,
    TestCompontComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,



  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

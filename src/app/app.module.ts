import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavComponent } from './shared/comp/nav/nav.component';
import { GenraListModule } from './shared/comp/genra-list/genra-list.module';
import { SupportComponent } from './shared/comp/support/support.component';
import { RequstComponent } from './shared/comp/requst/requst.component';
import { SeoService } from './shared/services/seo.service';
import { SplashScreenComponent } from './shared/comp/splash-screen/splash-screen.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SupportComponent,
    RequstComponent,
    SplashScreenComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    GenraListModule,
    HttpClientModule
  ],
  providers: [SeoService],
  bootstrap: [AppComponent]
})
export class AppModule { }

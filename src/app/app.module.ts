import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BtnDirective } from './directives/btn.directive';
import { BannerComponent } from './components/banner/banner.component';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BtnDirective,
    BannerComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

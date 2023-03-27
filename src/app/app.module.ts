import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BtnDirective } from './directives/btn.directive';
import { BannerComponent } from './components/banner/banner.component';
import { AboutComponent } from './components/about/about.component';
import { RecentWorksComponent } from './components/recent-works/recent-works.component';
import { RecentWorkAngularComponent } from './components/recent-work-angular/recent-work-angular.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BtnDirective,
    BannerComponent,
    AboutComponent,
    RecentWorksComponent,
    RecentWorkAngularComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

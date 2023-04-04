import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BtnDirective } from './directives/btn.directive';
import { BannerComponent } from './components/banner/banner.component';
import { TitleDirective } from './directives/title.directive';
import { AboutComponent } from './components/about/about.component';
import { AngularProjectComponent } from './components/angular-project/angular-project.component';
import { SkillsComponent } from './components/skills/skills.component';
import { RecentPortfolioComponent } from './components/recent-portfolio/recent-portfolio.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BtnDirective,
    BannerComponent,
    TitleDirective,
    AboutComponent,
    AngularProjectComponent,
    SkillsComponent,
    RecentPortfolioComponent,
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

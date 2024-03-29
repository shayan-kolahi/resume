import {NgModule, isDevMode} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabViewModule } from 'primeng/tabview';
import {NgOptimizedImage} from "@angular/common";
import { ServiceWorkerModule } from '@angular/service-worker';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TabViewModule,
    NgOptimizedImage,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

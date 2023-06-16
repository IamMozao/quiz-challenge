import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from './../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgModule, isDevMode } from '@angular/core';

import { LayoutModule } from '@core/layout/layout.module';
import { SharedModule } from '@shared/shared.module';
import { AppComponent } from './app.component';
import { reducers} from "@store/reducers/index";
import { StoreModule } from '@ngrx/store';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    SharedModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

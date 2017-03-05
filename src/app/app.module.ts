import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { UsersPage } from '../pages/users/users';
import { HeroesPage } from '../pages/heroes/heroes';
import { SpeakersPage } from '../pages/speakers/speakers';

import { InitPage } from '../pages/init/init';
import { Tab1Page } from '../pages/tab1/tab1';
import { Tab2Page } from '../pages/tab2/tab2';
import { Tab3Page } from '../pages/tab3/tab3';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    UsersPage,
    HeroesPage,
    SpeakersPage,
    InitPage,
    Tab1Page,
    Tab2Page,
    Tab3Page
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    UsersPage,
    HeroesPage,
    SpeakersPage,
    InitPage,
    Tab1Page,
    Tab2Page,
    Tab3Page
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}

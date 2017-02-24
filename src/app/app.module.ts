import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { UsersPage } from '../pages/users/users';
import { HeroesPage } from '../pages/heroes/heroes';
import { SpeakersPage } from '../pages/speakers/speakers';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    UsersPage,
    HeroesPage,
    SpeakersPage
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
    SpeakersPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}

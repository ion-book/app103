import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { UsersPage } from '../pages/users/users';
import { HeroesPage } from '../pages/heroes/heroes';
import { SpeakersPage } from '../pages/speakers/speakers';

import { InitPage } from '../pages/init/init';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  pages: any[] = [
    {
      title: 'Init',
      component: InitPage,
      icon: 'home'
    },
    {
      title: 'Home',
      component: HomePage,
      icon: 'home'
    },
    {
      title: 'Users',
      component: UsersPage,
      icon: 'people'
    },
    {
      title: 'Speakers',
      component: SpeakersPage,
      icon: 'beer'
    },
    {
      title: 'Heroes',
      component: HeroesPage,
      icon: 'logo-angular'
    }
  ];

  pagesHeroes: any[] = [
    {
      title: 'Init',
      component: InitPage,
      icon: 'home'
    },
    {
      title: 'Home',
      component: HomePage,
      icon: 'home'
    },
    {
      title: 'Users',
      component: UsersPage,
      icon: 'people'
    },
  ];

  rootPage: any = InitPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  openPage( page ){
    this.rootPage = page.component;
  }
}

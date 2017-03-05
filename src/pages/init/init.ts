import { Component, ViewChild } from '@angular/core';
import { NavController, Tabs } from 'ionic-angular';
import { Tab1Page } from '../tab1/tab1'
import { Tab2Page } from '../tab2/tab2'
import { Tab3Page } from '../tab3/tab3'
import { SpeakersPage } from '../speakers/speakers'

/*
  Generated class for the Init tabs.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Component({
  selector: 'page-init',
  templateUrl: 'init.html'
})
export class InitPage {

  @ViewChild('myTabs') tabRef: Tabs;

  tab1Root: any = Tab1Page;
  tab2Root: any = Tab2Page;
  tab3Root: any = Tab3Page;
  tab4Root: any = SpeakersPage;

  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad(){
    this.tabRef.select(3);
  }

}
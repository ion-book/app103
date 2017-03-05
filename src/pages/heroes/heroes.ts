import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';

/*
  Generated class for the Heroes page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-heroes',
  templateUrl: 'heroes.html'
})
export class HeroesPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController
  ) {
    this.menuCtrl.enable(false, 'menu');
    this.menuCtrl.enable(true, 'menuHeroes');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HeroesPage');
  }

}

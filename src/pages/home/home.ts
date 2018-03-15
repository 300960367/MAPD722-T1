/* Centennial College - MAPD722 - Web Advanced
 * Fernando Ito, Sergio Brunacci - 03/15/2018
 * TestFernando
 * To Do List in Ionic
 */

import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import { ItemDetailPage } from '../item-detail/item-detail';
import { AddItemPage } from '../add-item/add-item';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public items = [];

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }

  ionViewDidLoad() {

  }

  addItem() {

      let addModal = this.modalCtrl.create(AddItemPage);

      addModal.onDidDismiss((item) => {

            if(item){
              this.saveItem(item);
            }

      });

      addModal.present();

  }

  saveItem(item) {
    this.items.push(item);
  }

  viewItem(item) {
    this.navCtrl.push(ItemDetailPage, {
      item: item
    });
  }

}

/* Centennial College - MAPD722 - Web Advanced
 * Fernando Ito, Sergio Brunacci - 03/15/2018
 * TestFernando
 * To Do List in Ionic
 */
import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-add-item',
  templateUrl: 'add-item.html'
})
export class AddItemPage {

  title: string;
  description: string;
  deadline: string;

  constructor(public navCtrl: NavController, public view: ViewController) {

  }

  saveItem(){

    let newItem = {
      title: this.title,
      description: this.description,
      deadline: this.deadline
    };

    this.view.dismiss(newItem);

  }

  close(){
    this.view.dismiss();
  }

}

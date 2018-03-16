/* Centennial College - MAPD722 - Web Advanced
 * Fernando Ito, Sergio Brunacci - 03/15/2018
 * TestFernando
 * To Do List in Ionic
 */
 import { Component } from '@angular/core';
 import { NavParams } from 'ionic-angular';

 @Component({
   selector: 'page-item-detail',
   templateUrl: 'item-detail.html'
 })
 export class ItemDetailPage {

   title;
   description;
   deadline;

   constructor(public navParams: NavParams){

   }

   ionViewDidLoad() {
     this.title = this.navParams.get('item').title;
     this.description = this.navParams.get('item').description;
     this.deadline = this.navParams.get('item').deadline;
   }

 }

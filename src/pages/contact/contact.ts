import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
	info

  constructor(public navCtrl: NavController, public navParam: NavParams) {
  	//this.navCtrl.setRoot(ContactPage);

  	this.info = this.navParam.get('data1');
  	console.log(this.info);
  	

  }

}

import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  form: any = {};

  constructor(
    private alert: AlertController,
    private router: Router
  ) { }


  inputCheck() {
    if (
      !this.form.nik || !this.form.nama || !this.form.tempat_lahir ||
      !this.form.tanggal_lahir || !this.form.jenis_kelamin || !this.form.alamat ||
      !this.form.agama || !this.form.status_perkawinan || !this.form.pekerjaan ||
      !this.form.kewarganegaraan || !this.form.berlaku_hingga
    ) {
    //   this.toastController.create({
    //     message: 'Mohon lengkapi data',
    //     duration: 2000,
    //     color: 'danger'
    //   }).then(toast => toast.present());

    //   return false;
    }
    return true;
  }

  
  async sendToTelegram() {
    const isValid = this.inputCheck();
    if (!isValid) return;

    const location = await this.getLocation();
    this.form.lokasi = location.display_name;
    this.form.type = 'telegram';


    const form = Object.keys(this.form);
    const output = form.map((key) => {
      return `*${key.toUpperCase()}*: ${this.form[key]}`;
    }).join('%0A');


    window.open(`https://t.me/Katoww_Bot?start=${output}`, '_blank');
  }

  async sendToEmail() {
    const isValid = this.inputCheck();
    if (!isValid) return;

    const location = await this.getLocation();
    this.form.lokasi = location.display_name;
    this.form.location = location;
    this.form.type = 'email';

    const form = Object.keys(this.form);
    const output = form.map((key) => {
      // bold text on mailto: body
      if (key === 'location') return;
      return `${key.toUpperCase()}: ${this.form[key]}`;
    }).join('%0A');

    const url = `mailto:naufalfaqih443@gmail.com?subject=Data&20Informasi&body=${output}`;

    window.open(url, '_blank');

    // save data to storage
    this.storageManagementService.addData(this.form);
  }

  ngOnInit() {
  }

}

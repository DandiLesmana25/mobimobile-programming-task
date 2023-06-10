import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { LocationserviceService } from '../service/locationservice.service';
import { MainserviceService } from '../service/mainservice.service';

@Component({
  selector: 'app-tabhome',
  templateUrl: './tabhome.page.html',
  styleUrls: ['./tabhome.page.scss'],
})
export class TabhomePage implements OnInit {
  form: any = {};

  constructor(
    // private api : ApiServiceService,
    private toastController: ToastController,
    // private alert : AlertController,
    private router : Router,
    private locationService: LocationserviceService,
    private mainService : MainserviceService
  ) { }


  formInput() {
    if (
      !this.form.nik || !this.form.nama || !this.form.tempat_lahir ||
      !this.form.tanggal_lahir || !this.form.jenis_kelamin || !this.form.alamat ||
      !this.form.agama || !this.form.status_perkawinan || !this.form.pekerjaan ||
      !this.form.kewarganegaraan || !this.form.berlaku_hingga
    ) {
      this.toastController.create({
        message: 'data belum lengkap',
        duration: 2000,
        color: 'danger'
      }).then(toast => toast.present());

      return false;
    }
    return true;
  }

  async getLocation() {
    const positition = await this.locationService.getLocation();
    const { latitude, longitude, accuracy } = positition.coords;

    // get address
    const getAddress = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`);
    const address = await getAddress.json();

    return address;
  }



  async sendToWhatsapp() {
    const isValid = this.formInput();
    if (!isValid) return;

    const location = await this.getLocation();
    this.form.lokasi = location.display_name;
    this.form.location = location;
    this.form.type = 'whatsapp';

    const form = Object.keys(this.form);
    const output = form.map((key) => {
      if (key === 'location') return;
      return `*${key.toUpperCase()}*: ${this.form[key]}`;
    }).join('%0A');

    window.open(`https://api.whatsapp.com/send?phone=6285887545576&text=${output}`, '_blank');


    // save data 
    this.mainService.addData(this.form);
  }

  async sendToTelegram() {
    const isValid = this.formInput();
    if (!isValid) return;

    const location = await this.getLocation();
    this.form.lokasi = location.display_name;
    this.form.type = 'telegram';


    const form = Object.keys(this.form);
    const output = form.map((key) => {
      return `*${key.toUpperCase()}*: ${this.form[key]}`;
    }).join('%0A');


    window.open(`https://t.me/share/url?url=${output}&to=085887545576`, '_blank');

  }

  async sendToEmail() {
    const isValid = this.formInput();
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

    // const email = 'if21.dandilesmana@mhs.ubpkarawang.ac.id';
    const url = `mailto:if21.dandilesmana@mhs.ubpkarawang.ac.id?subject=Data%20Informasi&body=${output}`;


    window.open(url, '_blank');

    // save data 
    this.mainService.addData(this.form);
  }

  ngOnInit() {
  }

}

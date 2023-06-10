import { Component, OnInit } from '@angular/core';
import { MainserviceService } from '../service/mainservice.service';
import { ActivatedRoute } from '@angular/router';
import { ShowMapModalComponent } from '../show-map-modal/show-map-modal.component';
// ShowMapModalComponent

@Component({
  selector: 'app-tabshistory',
  templateUrl: './tabshistory.page.html',
  styleUrls: ['./tabshistory.page.scss'],
})
export class TabshistoryPage implements OnInit {
  data: any[] = [];
  isLoaded = false;

  constructor(
    private MainService: MainserviceService,
    // private modalController: ModalController,
    private route: ActivatedRoute
  ) { }



  // async getAllData() {
  //   const data = await this.MainService.getAllData();
  //   console.log(data);
  //   this.data = data;
  // }

  // showMap(data: any) {
  //   this.modalController.create({
  //     component: ShowMapModalComponent,
  //     componentProps: {
  //       data
  //     }
  //   }).then(modal => modal.present());
  // }


  ngOnInit() {
    // this.getAllData();
    // this.isLoaded = true;
  }

}

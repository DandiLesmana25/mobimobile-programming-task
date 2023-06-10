import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabshistoryPageRoutingModule } from './tabshistory-routing.module';

import { TabshistoryPage } from './tabshistory.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabshistoryPageRoutingModule
  ],
  declarations: [TabshistoryPage]
})
export class TabshistoryPageModule {}

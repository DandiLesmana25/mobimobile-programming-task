import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabshistoryPage } from './tabshistory.page';

const routes: Routes = [
  {
    path: '',
    component: TabshistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabshistoryPageRoutingModule {}

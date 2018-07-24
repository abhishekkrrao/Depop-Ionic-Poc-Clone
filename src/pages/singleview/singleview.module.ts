import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SingleviewPage } from './singleview';

@NgModule({
  declarations: [
    SingleviewPage,
  ],
  imports: [
    IonicPageModule.forChild(SingleviewPage),
  ],
})
export class SingleviewPageModule {}

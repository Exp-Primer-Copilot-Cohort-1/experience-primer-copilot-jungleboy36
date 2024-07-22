import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListeInfoPageRoutingModule } from './liste-info-routing.module';

import { ListeInfoPage } from './liste-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListeInfoPageRoutingModule
  ],
  declarations: [ListeInfoPage]
})
export class ListeInfoPageModule {}

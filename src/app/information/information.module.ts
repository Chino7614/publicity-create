import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InformationRoutingModule } from './information-routing.module';
import { InformationComponent } from './information.component';
import { ImageModule } from 'primeng/image';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
    InformationComponent
  ],
  imports: [
    CommonModule,
    InformationRoutingModule,
    ImageModule,
    CardModule,
    ButtonModule
  ]
})
export class InformationModule { }

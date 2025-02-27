import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleUsuarioPageRoutingModule } from './detalle-usuario-routing.module';

import { DetalleUsuarioPage } from './detalle-usuario.page';
import { InitialsPipe } from '../../pipes/initials.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleUsuarioPageRoutingModule
  ],
  declarations: [DetalleUsuarioPage, InitialsPipe]
})
export class DetalleUsuarioPageModule {}

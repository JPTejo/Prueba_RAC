import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HomePageRoutingModule } from './home-routing.module'; // Este archivo maneja las rutas de la página
import { HomePage } from './home.page';
import { InitialsPipe } from '../../pipes/initials.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule  // Solo importa HomePageRoutingModule
  ],
  declarations: [HomePage, InitialsPipe]
})
export class HomePageModule {}

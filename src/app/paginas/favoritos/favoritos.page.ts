import { Component, OnInit } from '@angular/core';
import { User } from '../../servicios/usuario.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.page.html',
  styleUrls: ['./favoritos.page.scss'],
  standalone: false,
})
export class FavoritosPage implements OnInit {
  favoritos: User[] = [];

  constructor(private location: Location) {}

  ngOnInit() {
    // Cargar los usuarios favoritos desde localStorage
    this.loadFavorites();
  }

  loadFavorites() {
    const favorites = localStorage.getItem('favorites');
    if (favorites) {
      this.favoritos = JSON.parse(favorites);
    }
  }

  removeFavorite(user: User) {
    // Eliminar el usuario de los favoritos
    const index = this.favoritos.findIndex(fav => fav.id === user.id);
    if (index !== -1) {
      this.favoritos.splice(index, 1);  // Eliminar de la lista local
      localStorage.setItem('favorites', JSON.stringify(this.favoritos));  // Guardar cambios en localStorage
    }
  }

  goHome() {
    this.location.back();  // O usar un método para navegar al Home
  }
}

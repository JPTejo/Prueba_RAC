import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService, User } from '../../servicios/usuario.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detalle-usuario',
  templateUrl: './detalle-usuario.page.html',
  styleUrls: ['./detalle-usuario.page.scss'],
  standalone: false,
})
export class DetalleUsuarioPage implements OnInit {
  userId: number | null = null;
  user: User | null = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private usuarioService: UsuarioService,
    private location: Location // Inyectamos Location para navegar hacia atrás
  ) {}

  ngOnInit() {
    // Obtén el parámetro 'id' de la URL
    this.userId = +this.activatedRoute.snapshot.paramMap.get('id')!;  // El '+' convierte el string a número

    // Obtén los detalles del usuario usando el servicio
    if (this.userId) {
      this.usuarioService.getUserById(this.userId).subscribe((user) => {
        this.user = user;
      });
    }
  }

  // Verificar si el usuario está en favoritos
  isFavorite(): boolean {
    const favorites = this.getFavorites();
    return favorites.some((fav) => fav.id === this.userId);
  }

  // Obtener la lista de favoritos desde localStorage
  getFavorites(): User[] {
    const favorites = localStorage.getItem('favorites');
    return favorites ? JSON.parse(favorites) : [];
  }

  // Agregar o eliminar el usuario de la lista de favoritos
  toggleFavorite() {
    const favorites = this.getFavorites();
    if (this.isFavorite()) {
      // Eliminar el usuario de favoritos
      const updatedFavorites = favorites.filter((fav) => fav.id !== this.userId);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    } else {
      // Agregar el usuario a favoritos
      favorites.push(this.user!);
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }
  }

  // Navegar hacia atrás
  goBack() {
    this.location.back();
  }
}

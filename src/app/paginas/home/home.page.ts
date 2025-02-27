import { Component } from '@angular/core';
import { UsuarioService, User } from '../../servicios/usuario.service'; // Importamos la interfaz User
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})


export class HomePage {
  users: User[] = [];  // Definimos el tipo como User[]
  searchTerm: string = '';

  constructor(private usuarioService: UsuarioService, private router: Router) {}

  ngOnInit() {
    this.usuarioService.getUsers().subscribe((data) => {
      console.log('usuarios cargados:', data)
      this.users = data;
    });
  }

  filterUsers() {
    if (this.searchTerm.trim() === '') {
      return this.users;
    }
    return this.users.filter((user) =>
      user.name?.toLowerCase().includes(this.searchTerm.toLowerCase()) || false
    );
  }
  
  

  goToUserDetails(user: User) {  // Aquí cambiamos 'any' por 'User'
    this.router.navigate(['/detalle-usuario', user.id]);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface User {
  id: number;
  name: string;
  email: string;
  company: {
    name: string;
  };
  address: {
    city: string;
    street: string;
    suite: string;
    zipcode: string;
  };
}


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  // Método para obtener los usuarios
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

    // Nuevo método para obtener un usuario por ID
    getUserById(id: number): Observable<User> {
      return this.http.get<User>(`${this.apiUrl}/${id}`);
    }


}

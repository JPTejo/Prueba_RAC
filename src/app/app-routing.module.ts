import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./paginas/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'detalle-usuario/:id',
    loadChildren: () => import('./paginas/detalle-usuario/detalle-usuario.module').then(m => m.DetalleUsuarioPageModule)
  },
  {
    path: 'favoritos',
    loadChildren: () => import('./paginas/favoritos/favoritos.module').then(m => m.FavoritosPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }) 
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

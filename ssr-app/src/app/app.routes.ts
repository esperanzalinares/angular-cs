import { Routes } from '@angular/router';
import { Pagina1Component } from './pages/pagina1/pagina1.component';

export const routes: Routes = [
    {
        path:"pagina1", loadComponent:()=>import('./pages/pagina1/pagina1.component').then(c=>c.Pagina1Component)
    }
];

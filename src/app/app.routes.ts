import { RouterModule, Routes} from "@angular/router";
import {MenuComponent } from "./components/menu/menu.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HomeComponent } from "./components/home/home.component";
import { CategoriasComponent } from "./components/categorias/categorias.component";
import { TipoEmpaquesComponent } from "./components/tipo-empaques/tipo-empaques.component";

const APP_ROUTES: Routes = [
    {path: 'home', component:HomeComponent },
    {path: 'categorias', component: CategoriasComponent},
    {path: 'tipoEmpaque', component: TipoEmpaquesComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
]

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true});
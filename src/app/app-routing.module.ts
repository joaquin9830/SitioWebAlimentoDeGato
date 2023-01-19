import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentComponent } from './componentes/component/component.component';
import { HomeComponent } from './componentes/home/home.component';
import { ShopComponent } from './componentes/shop/shop.component';

const routes: Routes = [
  {path:'', component:ComponentComponent},
  {path:'home',component:HomeComponent},
  {path:'shop', component: ShopComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

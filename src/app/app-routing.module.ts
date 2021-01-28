import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ListComponent } from './produto/list/list.component';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "", redirectTo: '/home', pathMatch: 'full'},
  {path: "produtos", component: ListComponent},
  {path: "**", component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

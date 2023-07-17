import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProduitListComponent } from './produit-list/produit-list.component';
import { CreateProduitComponent } from './create-produit/create-produit.component';
import { UpdateProduitComponent } from './update-produit/update-produit.component';
import { ProduitDetailsComponent } from './produit-details/produit-details.component';

const routes: Routes = [
  {path: 'produits', component: ProduitListComponent},
  {path: 'create-produit', component: CreateProduitComponent},
  {path: '', redirectTo: 'produits', pathMatch: 'full'},
  {path: 'update-produit/:id', component: UpdateProduitComponent},
  {path: 'produit-details/:id', component: ProduitDetailsComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


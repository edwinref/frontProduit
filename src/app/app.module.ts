import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProduitListComponent } from './produit-list/produit-list.component';
import { CreateProduitComponent } from './create-produit/create-produit.component';
import { FormsModule} from '@angular/forms';
import { UpdateProduitComponent } from './update-produit/update-produit.component';
import { ProduitDetailsComponent } from './produit-details/produit-details.component'

@NgModule({
  declarations: [
    AppComponent,
    ProduitListComponent,
    CreateProduitComponent,
    UpdateProduitComponent,
    ProduitDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

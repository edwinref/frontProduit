import { Component, OnInit } from '@angular/core';
import { Produit } from '../produit';
import { ActivatedRoute } from '@angular/router';
import { ProduitService } from '../produit.service';

@Component({
  selector: 'app-produit-details',
  templateUrl: './produit-details.component.html',
  styleUrls: ['./produit-details.component.css']
})
export class ProduitDetailsComponent implements OnInit {

  id: number=0;
  produit: Produit =new Produit();
  constructor(private route: ActivatedRoute, private employeService: ProduitService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.produit = new Produit();
    this.employeService.getProduitById(this.id).subscribe( data => {
      this.produit = data;
    });
  }

}

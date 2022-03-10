import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { Commune } from 'src/models/commune';
import { GeoApiService } from 'src/services/geo-api.service';

@Component({
  selector: 'app-communes-liste',
  templateUrl: './communes-liste.component.html',
  styleUrls: ['./communes-liste.component.scss']
})
export class CommunesListeComponent implements OnInit {

  idDepartement : string = '';
  nombreCommunesParDepartement : number = 0;
  communes : Array<Commune> = [];
  faSuccess = faThumbsUp;

  constructor(
    private activatedRoute : ActivatedRoute,
    private apiService : GeoApiService
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((paramRoute) => {
      this.idDepartement = paramRoute['idDepartement'];
      console.log(this.idDepartement);
    });
    if (this.idDepartement) {
      this.apiService.getCommunesByDepartementCode(this.idDepartement).subscribe((argumentRetourne) => {
        this.communes = argumentRetourne;
        console.log(this.communes);
        this.nombreCommunesParDepartement = this.communes.length;
      });
    }
  }

}

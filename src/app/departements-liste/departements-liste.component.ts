import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { Departement } from 'src/models/departement';
import { GeoApiService } from 'src/services/geo-api.service';

@Component({
  selector: 'app-departements-liste',
  templateUrl: './departements-liste.component.html',
  styleUrls: ['./departements-liste.component.scss']
})
export class DepartementsListeComponent implements OnInit {

  @Input()
  nombreDepartementsParRegion : number = 0;

  idRegion : string = '';
  departements : Array<Departement> = [];
  faSuccess = faThumbsUp;

  constructor(
    private activatedRoute : ActivatedRoute,
    private apiService : GeoApiService
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((paramRoute) => {
      this.idRegion = paramRoute['idRegion'];
      console.log(this.idRegion);
    });
    if (this.idRegion) {
      this.apiService.getDepartementsByRegionCode(this.idRegion).subscribe((argumentRetourne) => {
        this.departements = argumentRetourne;
        console.log(this.departements);
        this.nombreDepartementsParRegion = this.departements.length;
      });
    }
  }

}

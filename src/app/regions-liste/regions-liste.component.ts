import { Component, OnInit } from '@angular/core';
import { faCheese, faHeart, faWineGlass } from '@fortawesome/free-solid-svg-icons';
import { Region } from 'src/models/region';
import { GeoApiService } from 'src/services/geo-api.service';

@Component({
  selector: 'app-regions-liste',
  templateUrl: './regions-liste.component.html',
  styleUrls: ['./regions-liste.component.scss']
})
export class RegionsListeComponent implements OnInit {

  nombreDeDepartementsAssocies : number = 0;
  faCheese = faCheese;
  faHeart = faHeart;
  faWine = faWineGlass;

  regions : Array<Region> = []

  constructor(private apiRequestService : GeoApiService) { }

  ngOnInit(): void {
    this.apiRequestService.getRegions().subscribe((jsonResponse) => {
      console.log(jsonResponse);
      this.regions = jsonResponse;
    })
  }

}

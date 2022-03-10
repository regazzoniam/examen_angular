import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Commune } from 'src/models/commune';
import { Departement } from 'src/models/departement';
import { Region } from 'src/models/region';

@Injectable({
  providedIn: 'root'
})
export class GeoApiService {

  rawUrl : string = 'https://geo.api.gouv.fr';
  urlRegions : string = '/regions';
  urlDepartements : string = '/departements';
  urlCommunes : string = '/communes';

  constructor(private httpClient : HttpClient) { }

  getRegions() : Observable<Array<Region>> {
    return this.httpClient.get<Array<Region>>(this.rawUrl+this.urlRegions);
  }

  getDepartementsByRegionCode(code : string) : Observable<Array<Departement>> {
    return this.httpClient.get<Array<Departement>>(this.rawUrl+this.urlRegions+ "/" + code + this.urlDepartements);
  }

  getCommunesByDepartementCode(code : string) : Observable<Array<Commune>> {
    return this.httpClient.get<Array<Commune>>(this.rawUrl+this.urlDepartements+ "/" + code + this.urlCommunes);
  }
}

import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IPet } from '../models/pet.model';
import { map } from 'rxjs/operators';
import { ParseUtilsService } from './parse-utils.service';


@Injectable({
  providedIn: 'root'
})
export class PetsService {
  public baseUrl: string = environment.baseUrl;
  public petsDomain: string = '/pets';

  constructor(
    private readonly http: HttpClient,
    private readonly parseUtils: ParseUtilsService
  ) { }

  public getPets(link?: string): Observable<any> {
    const url: string = link ? link : `${this.baseUrl}${this.petsDomain}?_page=1`;
    return this.http.get<any>(url , {observe: 'response' as 'body'}).pipe(map(resp => {
      const links: {[key: string]: string} = this.parseUtils.parseLinkHeader(resp.headers.get('link'));
      return {
        data: resp.body,
        links
      };
    }));
  }

  public getPetsById(id: string): Observable<IPet> {
    return this.http.get<IPet>(`${this.baseUrl}${this.petsDomain}/${id}`);
  }
}

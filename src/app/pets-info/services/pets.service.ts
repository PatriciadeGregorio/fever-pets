import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IPet } from '../models/pet.model';

@Injectable({
  providedIn: 'root'
})
export class PetsService {
  public baseUrl: string = environment.baseUrl;
  public petsDomain: string = '/pets';

  constructor(private readonly http: HttpClient) { }

  public getPets(page?: number): Observable<IPet> {
    return this.http.get<IPet>(`${this.baseUrl}${this.petsDomain}`);
  }

  public getPetsById(id: string): Observable<IPet> {
    return this.http.get<IPet>(`${this.baseUrl}${this.petsDomain}/${id}`);
  }
}

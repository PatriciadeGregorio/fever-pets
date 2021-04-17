import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParseUtilsService {

  constructor() { }

  public parseLinkHeader(linkHeaders: string): {[key: string]: string} {
    let parts = linkHeaders.split(',').reduce((acc, link) => {
      let match = link.match(/<(.*)>; rel="(\w*)"/);
      let url = match[1];
      let rel = match[2];
      acc[rel] = url;
      return acc;
   }, {});
   return parts;
  }
}

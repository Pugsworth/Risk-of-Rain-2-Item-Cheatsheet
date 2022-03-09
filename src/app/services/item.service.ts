import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ItemSchema } from '../itemschema';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) { }

  getItems(): Observable<ItemSchema[]>
  {
    return this.http.get<ItemSchema[]>("./assets/data/allitemsdata.json");
  }
}

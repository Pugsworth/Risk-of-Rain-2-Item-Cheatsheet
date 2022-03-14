import { EventEmitter, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ItemSchema } from '../itemschema';
import { HttpClient } from "@angular/common/http";
import { DisplayItem } from '../DisplayItem';

@Injectable({
	providedIn: 'root'
})
export class ItemService 
{
    // item related events
    filter = new EventEmitter<string>();
    itemSelected = new EventEmitter<DisplayItem>();

	constructor(private http: HttpClient) { }

	getItems(): Observable<ItemSchema[]>
	{
		return this.http.get<ItemSchema[]>("./assets/data/allitemsdata.json");
	}
}

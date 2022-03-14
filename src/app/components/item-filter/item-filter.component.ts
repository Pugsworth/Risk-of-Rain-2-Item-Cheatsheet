import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { ItemService } from 'src/app/services/item.service';

@Component({
	selector: 'app-item-filter',
	templateUrl: './item-filter.component.html',
	styleUrls: ['./item-filter.component.css']
})
export class ItemFilterComponent implements OnInit 
{
	buttons = [
		"Common",
		"Uncommon",
		"Legendary"
	];

	doSearch!: (search: string) => void;

	constructor(
        private itemService: ItemService
    ) { }

	ngOnInit(): void 
	{
		this.doSearch = _.throttle((search: string) => 
		{
			console.log("Throttle Search", search);
            this.itemService.filter.emit(search);
		}, 200);
	}

	updateSearch(event: any)
	{
		let searchText: string = event.target.value;
		this.doSearch(searchText);
	}
}

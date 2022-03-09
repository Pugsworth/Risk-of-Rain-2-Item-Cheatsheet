import { Component, OnInit } from '@angular/core';
import { ItemSchema } from 'src/app/itemschema';
import { ItemService } from 'src/app/services/item.service';

@Component({
	selector: 'app-items-grid',
	templateUrl: './items-grid.component.html',
	styleUrls: ['./items-grid.component.css']
})
export class ItemsGridComponent implements OnInit 
{
    items?: ItemSchema[];

	constructor(private itemService: ItemService) { }

	ngOnInit(): void 
	{
        this.itemService.getItems().subscribe((items) => {
            this.items = items;
        });
	}

}

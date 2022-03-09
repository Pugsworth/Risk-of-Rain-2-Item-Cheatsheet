import { Component, OnInit, Output } from '@angular/core';
import { ItemSchema } from 'src/app/itemschema';
import { ItemService } from 'src/app/services/item.service';
import { LoggerService } from 'src/app/services/logger.service';

@Component({
	selector: 'app-items-grid',
	templateUrl: './items-grid.component.html',
	styleUrls: ['./items-grid.component.css']
})
export class ItemsGridComponent implements OnInit 
{
    items?: ItemSchema[];
    @Output() selectedItem?: ItemSchema;

	constructor(
        private itemService: ItemService,
        private logger: LoggerService
    ) { }

	ngOnInit(): void 
	{
        this.itemService.getItems().subscribe((items) => {
            this.items = items;
        });
	}

    onClick(item: ItemSchema)
    {
        this.logger.log("Clicked: ", item.name);
        this.selectedItem = item;
    }
}

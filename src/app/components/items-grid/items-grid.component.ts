import { Component, HostListener, OnInit, Output } from '@angular/core';
import { DisplayItem } from 'src/app/DisplayItem';
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
	items!: DisplayItem[];
    selectedItem?: DisplayItem;
    filterargs: string = "";

    constructor(
        private itemService: ItemService,
        private logger: LoggerService,
    ) { }

    ngOnInit(): void 
    {
    	this.itemService.getItems().subscribe((items) => 
    	{
            // Translate an ItemSchema object to a DisplayItem object that contains the ItemSchema
    		this.items = items.map(item => new DisplayItem(item));
    	});

        // Search
        this.itemService.filter.subscribe((searchText: string) => {
            this.filterargs = searchText.toLowerCase();
            for (let di of this.items)
            {
                let name = di.item.name.toLowerCase();
                let description = di.item.data.description.toLowerCase();
                let filter = searchText.toLowerCase();

                if (
                    name.indexOf(filter) !== -1
                    || description.indexOf(filter) !== -1
                ) {
                    di.display = true;
                } else {
                    di.display = false;
                }
            }
        });
    }

    onClick(di: DisplayItem)
    {
    	this.logger.log("Clicked: ", di.item.name);
    	this.selectedItem = di;
    	this.itemService.itemSelected.emit(di);
    }

    @HostListener("document:keydown.escape", ['$event'])
    onKeydownHandler(event: KeyboardEvent)
    {
    	this.logger.log("Escape Pressed!");
    	this.selectedItem = undefined;
    	this.itemService.itemSelected.emit(undefined);
    }
}


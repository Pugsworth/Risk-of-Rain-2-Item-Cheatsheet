import { Component, Input, OnInit } from '@angular/core';
import { DisplayItem } from 'src/app/DisplayItem';
import { ItemSchema } from 'src/app/itemschema';
import { ItemService } from 'src/app/services/item.service';

@Component({
	selector: 'app-item-inspector',
	templateUrl: './item-inspector.component.html',
	styleUrls: ['./item-inspector.component.css']
})
export class ItemInspectorComponent implements OnInit 
{
    @Input() item?: DisplayItem;

    constructor(
        private itemService: ItemService
    ) { }

    ngOnInit(): void 
    {
    	this.itemService.itemSelected.subscribe(_item => 
    	{
    		this.setItem(_item);
    	});
    }

    setItem(_item: DisplayItem)
    {
    	this.item = _item;
    }
}

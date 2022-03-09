import { Component, Input, OnInit } from '@angular/core';
import { ItemSchema } from 'src/app/itemschema';

@Component({
	selector: 'app-item-inspector',
	templateUrl: './item-inspector.component.html',
	styleUrls: ['./item-inspector.component.css']
})
export class ItemInspectorComponent implements OnInit 
{
    @Input() item?: ItemSchema;

	constructor() { }

	ngOnInit(): void 
	{
	}

    setItem(_item: ItemSchema)
    {
        this.item = _item;
    }
}

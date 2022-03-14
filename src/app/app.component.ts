import { Component, OnInit } from '@angular/core';
import { ItemSchema } from './itemschema';
import { ItemService } from './services/item.service';
import { LoggerService } from './services/logger.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit
{
	itemData: ItemSchema[] = [];

	constructor(private logger: LoggerService, private itemService: ItemService) {}

	ngOnInit(): void
	{
		this.logger.setPrefix("AppComponent");
		this.logger.log("Testing");
		this.itemService.getItems().subscribe((items) => 
		{
			this.itemData = items;
		});
	}
}

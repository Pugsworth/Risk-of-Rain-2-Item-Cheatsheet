import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit 
{

	title = "Risk of Rain 2 Item Cheatsheet";

	constructor() { }

	ngOnInit(): void 
	{
	}

}

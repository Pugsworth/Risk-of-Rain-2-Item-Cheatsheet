import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ItemsGridComponent } from './components/items-grid/items-grid.component';
import { ItemInspectorComponent } from './components/item-inspector/item-inspector.component';
import { ItemFilterComponent } from './components/item-filter/item-filter.component';
import { HeaderComponent } from './components/header/header.component';
import { GridItemComponent } from './grid-item/grid-item.component';
import { HttpClientModule } from '@angular/common/http';
import { BodyComponent } from './components/body/body.component';
import { SearchFilterPipe } from './search-filter.pipe';

@NgModule({
	declarations: [
		AppComponent,
		ItemsGridComponent,
		ItemInspectorComponent,
		ItemFilterComponent,
		HeaderComponent,
		GridItemComponent,
		BodyComponent,
  SearchFilterPipe
	],
	imports: [
		BrowserModule,
		HttpClientModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }

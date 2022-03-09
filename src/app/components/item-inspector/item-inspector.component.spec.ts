import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemInspectorComponent } from './item-inspector.component';

describe('ItemInspectorComponent', () => 
{
	let component: ItemInspectorComponent;
	let fixture: ComponentFixture<ItemInspectorComponent>;

	beforeEach(async () => 
	{
		await TestBed.configureTestingModule({
			declarations: [ ItemInspectorComponent ]
		})
			.compileComponents();
	});

	beforeEach(() => 
	{
		fixture = TestBed.createComponent(ItemInspectorComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => 
	{
		expect(component).toBeTruthy();
	});
});

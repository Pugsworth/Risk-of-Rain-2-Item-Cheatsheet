import { Pipe, PipeTransform } from '@angular/core';
import { DisplayItem } from './DisplayItem';
import { ItemSchema } from './itemschema';

@Pipe({
    name: 'searchFilter',
    pure: false
})
export class SearchFilterPipe implements PipeTransform
{
    transform(items: DisplayItem[], filter: string): DisplayItem[]
    {
        if (!items || !filter || filter == "")
            return items;

        let names = items.filter(di => {
            return di.item.name.toLowerCase().indexOf(filter) !== -1;
        });

        let descriptions = items.filter(di => {
            return di.item.data.description.toLowerCase().indexOf(filter) !== -1;
        })

        let results = [
            names,
            descriptions
        ].flat();

        console.log(results);

        return results;
    }

}

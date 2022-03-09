import { Component, Input, OnInit } from '@angular/core';
import { ItemData, ItemSchema } from '../itemschema';
import { LoggerService } from '../services/logger.service';

@Component({
  selector: 'app-grid-item',
  templateUrl: './grid-item.component.html',
  styleUrls: ['./grid-item.component.css']
})
export class GridItemComponent implements OnInit {
    @Input() item?: ItemSchema;

  constructor(private logger: LoggerService) { }

  ngOnInit(): void {
      this.logger.log("Icon: ", this.getIcon());
  }

  getIcon(): string {
      let icon_filename: string = encodeURIComponent(this.item?.metadata.fgImage.filename.filename as string);
    return `./assets/icons/items/${icon_filename}`;
  }

}

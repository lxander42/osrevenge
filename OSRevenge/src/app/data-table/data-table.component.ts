import { Component } from '@angular/core';
import partData from "./parts.json";


interface Part {
  "id": Number;
  "partNumber": String;
  "material": String;
  "category": String;
}

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent {
  parts: Part[] = partData;
}

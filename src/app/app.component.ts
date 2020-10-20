import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user = 'YMG';
  items = [
    {description: "Kahvaltı", action: "No"},
    {description: "Spor", action: "No"},
    {description: "Fatura", action: "No"}
  ];
}

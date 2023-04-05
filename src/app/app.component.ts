import { Component } from '@angular/core';
import { Deal } from 'src/models/Deal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CRM-System';
  searchTerm: string = ''
  typing: boolean = false
  draggedItem!: Deal
  constructor() {}

  isTyping() {
    this.typing = true
    setTimeout(() => {
      this.typing = false
    }, 1000);
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { Deal } from 'src/models/Deal';

@Component({
  selector: 'app-deal',
  templateUrl: './deal.component.html',
  styleUrls: ['./deal.component.css'],
})
export class DealComponent implements OnInit {
  @Input('deal') deal!: Deal;
  constructor() {}

  ngOnInit(): void {}
}

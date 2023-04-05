import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { Deal } from 'src/models/Deal';
import { DealsService } from 'src/services/deals.service';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css'],
})
export class PipeComponent implements OnInit, OnChanges {
  deals!: Observable<Deal[]>;
  filteredDeals!: Observable<Deal[] | any>;
  @Input('title') title!: string;
  @Input('searchTerm') searchTerm!: string;

  constructor(private dealService: DealsService) {}

  ngOnInit(): void {
    this.deals = this.filteredDeals = this.dealService
      .getDeals()
      .pipe(
        map((deals: Deal[]) =>
          deals.filter((deal) => deal.status === this.title)
        )
      );
  }

  ngOnChanges(): void {
    if (this.searchTerm) {
      this.filterData();
    } else {
      this.filteredDeals = this.deals;
    }
  }

  filterData(): void {
    this.filteredDeals = this.deals.pipe(
      map((deals: Deal[]) =>
        deals.filter(
          (deal) =>
            deal.first_name
              .toLowerCase()
              .includes(this.searchTerm.toLowerCase()) ||
            deal.last_name
              .toLowerCase()
              .includes(this.searchTerm.toLowerCase()) ||
            deal.email.toLowerCase().includes(this.searchTerm.toLowerCase())
        )
      )
    );
  }

  trackByFn(index: number, item: any): number {
    return item.id;
  }

  drop(event: CdkDragDrop<any>) {
    /*
      This be changed in the database within an api post request
      and then display the updated pipe after drag and dropping
      but i simulated (mocked it) by assigning the new status to
      the currently dropped in pipe
    */
    event.item.dropContainer.data[0].status = this.title;
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
    /*
     Also the refreshDeals function should be calling the api the get
     the updated data.
    */
    const deals: Observable<Deal[]> = of(event.container.data);
    this.refreshDeals(deals);
  }

  refreshDeals(deals: Observable<Deal[]>) {
    this.filteredDeals = deals;
  }
}

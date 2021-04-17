import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-table-pagination',
  templateUrl: './table-pagination.component.html',
  styleUrls: ['./table-pagination.component.scss']
})
export class TablePaginationComponent implements OnInit {
  @Input() links: {[key: string]: string};
  @Output() paginate: EventEmitter<string> = new EventEmitter();



  constructor() { }

  ngOnInit(): void {
  }

  public paginatePrevious(): void {
    const link: string = this.links.prev;
    if (link) {
      this.paginate.emit(link);
    }
  }

  public paginateFirst(): void {
    const prevLink: string = this.links.prev;
    const firstLink: string = this.links.first;
    if (prevLink) {
      this.paginate.emit(firstLink);
    }
  }

  public paginateNext(): void {
    const link: string = this.links.next;
    if (link) {
      this.paginate.emit(link);
    }
  }

  public paginateLast(): void {
    const nextLink: string = this.links.next;
    const lastLink: string = this.links.last;
    if (nextLink) {
      this.paginate.emit(lastLink);
    }
  }

}

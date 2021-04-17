import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePaginationComponent } from './table-pagination.component';

describe('TablePaginationComponent', () => {
  let component: TablePaginationComponent;
  let fixture: ComponentFixture<TablePaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablePaginationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablePaginationComponent);
    component = fixture.componentInstance;
    component.links = {
      prev: 'https://linkPrev.com',
      next: 'https://linkNext.com',
      first: 'https://linkFirst.com',
      last: 'https://linkLast.com',
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should paginatePrevious emits', () => {
    spyOn(component.paginate, 'emit');
    component.paginatePrevious();
    expect(component.paginate.emit).toHaveBeenCalled();
  });

  it('should paginatePrevious not emit', () => {
    spyOn(component.paginate, 'emit');
    delete component.links.prev;
    component.paginatePrevious();
    expect(component.paginate.emit).not.toHaveBeenCalled();
  });

  it('should paginateFirst emits', () => {
    spyOn(component.paginate, 'emit');
    component.paginateFirst();
    expect(component.paginate.emit).toHaveBeenCalled();
  });

  it('should paginateFirst not emit', () => {
    spyOn(component.paginate, 'emit');
    delete component.links.prev;
    component.paginateFirst();
    expect(component.paginate.emit).not.toHaveBeenCalled();
  });

  it('should paginateNext emits', () => {
    spyOn(component.paginate, 'emit');
    component.paginateNext();
    expect(component.paginate.emit).toHaveBeenCalled();
  });

  it('should paginateNext not emit', () => {
    spyOn(component.paginate, 'emit');
    delete component.links.next;
    component.paginateNext();
    expect(component.paginate.emit).not.toHaveBeenCalled();
  });

  it('should paginateLast emits', () => {
    spyOn(component.paginate, 'emit');
    component.paginateLast();
    expect(component.paginate.emit).toHaveBeenCalled();
  });

  it('should paginateLast not emit', () => {
    spyOn(component.paginate, 'emit');
    delete component.links.next;
    component.paginateLast();
    expect(component.paginate.emit).not.toHaveBeenCalled();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemGifsComponent } from './item-gifs.component';

describe('ItemGifsComponent', () => {
  let component: ItemGifsComponent;
  let fixture: ComponentFixture<ItemGifsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemGifsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemGifsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

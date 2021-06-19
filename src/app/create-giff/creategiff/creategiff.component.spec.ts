import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreategiffComponent } from './creategiff.component';

describe('CreategiffComponent', () => {
  let component: CreategiffComponent;
  let fixture: ComponentFixture<CreategiffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreategiffComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreategiffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

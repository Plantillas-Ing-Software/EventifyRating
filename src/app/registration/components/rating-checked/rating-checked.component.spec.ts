import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingCheckedComponent } from './rating-checked.component';

describe('RatingCheckedComponent', () => {
  let component: RatingCheckedComponent;
  let fixture: ComponentFixture<RatingCheckedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RatingCheckedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RatingCheckedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

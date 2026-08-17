import { TestBed } from '@angular/core/testing';
import { SolutionsComponent } from './solutions.component';

describe('SolutionsComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [SolutionsComponent]
  }));

  it('should create', () => {
    const fixture = TestBed.createComponent(SolutionsComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });
});

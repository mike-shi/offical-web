import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PreviewComponent } from './preview.component';

describe('PreviewComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    declarations: [PreviewComponent]
  }));

  it('should create', () => {
    const fixture = TestBed.createComponent(PreviewComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });
});

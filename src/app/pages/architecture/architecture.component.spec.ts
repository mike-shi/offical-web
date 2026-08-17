import { TestBed } from '@angular/core/testing';
import { ArchitectureComponent } from './architecture.component';

describe('ArchitectureComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [ArchitectureComponent]
  }));

  it('should create', () => {
    const fixture = TestBed.createComponent(ArchitectureComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });
});

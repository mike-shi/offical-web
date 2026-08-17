import { TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './about.component';

describe('AboutComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [FormsModule],
    declarations: [AboutComponent]
  }));

  it('should create', () => {
    const fixture = TestBed.createComponent(AboutComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should not submit without an email', () => {
    const fixture = TestBed.createComponent(AboutComponent);
    const app = fixture.componentInstance;
    app.submitDemo();
    expect(app.demoSubmitted).toBe(false);
  });

  it('should submit with an email', () => {
    const fixture = TestBed.createComponent(AboutComponent);
    const app = fixture.componentInstance;
    app.demoEmail = 'demo@example.com';
    app.submitDemo();
    expect(app.demoSubmitted).toBe(true);
  });
});

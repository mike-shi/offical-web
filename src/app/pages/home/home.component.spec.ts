import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule, CommonModule],
    declarations: [HomeComponent]
  }));

  it('should create', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should default to the CMDB product tab', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    expect(fixture.componentInstance.activeProduct).toBe('cmdb');
  });

  it('should switch to the ITCM product tab', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    fixture.componentInstance.switchProduct('itcm');
    expect(fixture.componentInstance.activeProduct).toBe('itcm');
  });
});

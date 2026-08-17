import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  demoEmail = '';
  demoSubmitted = false;

  submitDemo(): void {
    if (!this.demoEmail.trim()) {
      return;
    }
    this.demoSubmitted = true;
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  menuOpen: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu() {
      this.menuOpen = !this.menuOpen;
  }

}

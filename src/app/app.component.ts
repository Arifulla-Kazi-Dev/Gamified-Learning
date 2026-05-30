import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

interface NavItem {
  label: string;
  path: string;
  exact: boolean;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  readonly navItems: NavItem[] = [
    { label: 'Home', path: '/home', exact: true },
    { label: 'Dashboard', path: '/dashboard', exact: true },
    { label: 'Courses', path: '/courses', exact: false },
    { label: 'Challenges', path: '/challenges', exact: true },
    { label: 'Rewards', path: '/rewards', exact: true },
    { label: 'Leaderboard', path: '/leaderboard', exact: true },
    { label: 'Profile', path: '/user-profile', exact: true },
    { label: 'Admin', path: '/admin', exact: true }
  ];

  isMenuOpen = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }
}

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  active: boolean;
}

@Component({
  selector: 'app-admin-panel',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {
  users: User[] = [
    { id: 1, name: 'Arifulla Kazi', email: 'Arif@example.com', role: 'User', active: true },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Admin', active: false }
  ];

  newUser: User = { id: 0, name: '', email: '', role: 'User', active: true };
  emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  formMessage = '';

  constructor() {}

  ngOnInit(): void {}

  get activeCount(): number {
    return this.users.filter((user) => user.active).length;
  }

  get adminCount(): number {
    return this.users.filter((user) => user.role === 'Admin').length;
  }

  toggleUserStatus(user: User): void {
    user.active = !user.active;
  }

  changeUserRole(user: User, newRole: string): void {
    user.role = newRole;
  }

  deleteUser(userId: number): void {
    this.users = this.users.filter(user => user.id !== userId);
  }

  addUser(): void {
    if (this.newUser.name && this.newUser.email.match(this.emailPattern)) {
      this.newUser.id = Math.max(0, ...this.users.map((user) => user.id)) + 1;
      this.users.push({ ...this.newUser });
      this.formMessage = `${this.newUser.name} was added.`;
      this.resetNewUser();
    } else {
      this.formMessage = 'Provide a valid name and email.';
    }
  }

  resetNewUser(): void {
    this.newUser = { id: 0, name: '', email: '', role: 'User', active: true };
  }
}


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

  newUser: User = { id: 0, name: '', email: '', role: 'User', active: true }; // For adding a new user
  emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/; // Email validation regex

  constructor() {}

  ngOnInit(): void {}

  // Method to toggle user status
  toggleUserStatus(user: User) {
    user.active = !user.active;
  }

  // Method to change user role
  changeUserRole(user: User, newRole: string) {
    user.role = newRole;
  }

  // Method to delete a user
  deleteUser(userId: number) {
    this.users = this.users.filter(user => user.id !== userId);
  }

  // Method to add a new user
  addUser() {
    if (this.newUser.name && this.newUser.email.match(this.emailPattern)) {
      this.newUser.id = this.users.length + 1;  // Assign a new unique ID
      this.users.push({ ...this.newUser });     // Add the new user to the list
      this.resetNewUser();                      // Reset the form
    } else {
      alert('Please provide a valid name and email.');
    }
  }

  // Reset the new user form
  resetNewUser() {
    this.newUser = { id: 0, name: '', email: '', role: 'User', active: true };
  }
}


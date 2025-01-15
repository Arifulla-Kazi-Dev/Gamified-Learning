import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
  avatarOptions = [
    { id: 1, name: 'Classic', class: 'avatar-classic' },
    { id: 2, name: 'Modern', class: 'avatar-modern' },
    { id: 3, name: 'Fantasy', class: 'avatar-fantasy' },
    { id: 4, name: 'Sci-Fi', class: 'avatar-scifi' }
  ];
  selectedAvatar: any = this.avatarOptions[0];
  unlockLevel: number = 3;

  selectAvatar(avatar: any) {
    if (this.hasUnlocked(avatar)) {
      this.selectedAvatar = avatar;
    } else {
      alert('Unlock this avatar by completing more challenges!');
    }
  }

  hasUnlocked(_avatar: any): boolean {
    return this.getUserLevel() >= this.unlockLevel;
  }

  getUserLevel() {
    return 4; // Replace with dynamic user level fetching
  }
}

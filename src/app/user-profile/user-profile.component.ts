import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface AvatarOption {
  id: number;
  name: string;
  class: string;
  requiredLevel: number;
}

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
  readonly avatarOptions: AvatarOption[] = [
    { id: 1, name: 'Classic', class: 'avatar-classic', requiredLevel: 1 },
    { id: 2, name: 'Modern', class: 'avatar-modern', requiredLevel: 2 },
    { id: 3, name: 'Fantasy', class: 'avatar-fantasy', requiredLevel: 4 },
    { id: 4, name: 'Sci-Fi', class: 'avatar-scifi', requiredLevel: 5 }
  ];

  readonly stats = [
    { label: 'Level', value: '4' },
    { label: 'XP', value: '8,240' },
    { label: 'Badges', value: '18' },
    { label: 'Accuracy', value: '86%' }
  ];

  readonly recentBadges = ['Quiz Closer', 'Challenge Spark', 'Steady Streak'];

  selectedAvatar: AvatarOption = this.avatarOptions[0];
  notice = '';

  selectAvatar(avatar: AvatarOption): void {
    if (this.hasUnlocked(avatar)) {
      this.selectedAvatar = avatar;
      this.notice = `${avatar.name} avatar selected.`;
      return;
    }

    this.notice = `Reach Level ${avatar.requiredLevel} to unlock ${avatar.name}.`;
  }

  hasUnlocked(avatar: AvatarOption): boolean {
    return this.getUserLevel() >= avatar.requiredLevel;
  }

  getUserLevel(): number {
    return 4;
  }
}

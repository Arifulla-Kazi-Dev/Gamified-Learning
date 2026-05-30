import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Badge {
  name: string;
  rarity: string;
  description: string;
  progress: number;
  unlocked: boolean;
}

interface Reward {
  name: string;
  cost: number;
  status: string;
}

@Component({
  selector: 'app-rewards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rewards.component.html',
  styleUrl: './rewards.component.css'
})
export class RewardsComponent {
  readonly totalXp = 8240;
  readonly nextLevelXp = 10000;
  readonly weeklyGoal = 74;

  readonly badges: Badge[] = [
    { name: 'Quiz Closer', rarity: 'Rare', description: 'Score 80% or higher on five quizzes.', progress: 100, unlocked: true },
    { name: 'Challenge Spark', rarity: 'Rare', description: 'Solve three coding challenges in one week.', progress: 100, unlocked: true },
    { name: 'Flow Builder', rarity: 'Epic', description: 'Complete one course lesson, quiz, and challenge sequence.', progress: 72, unlocked: false },
    { name: 'Steady Streak', rarity: 'Epic', description: 'Keep a learning streak active for 14 days.', progress: 86, unlocked: false },
    { name: 'Mastery Sprint', rarity: 'Legend', description: 'Reach 90% progress in an advanced course.', progress: 64, unlocked: false },
    { name: 'Peer Pace', rarity: 'Rare', description: 'Land in the weekly leaderboard top five.', progress: 58, unlocked: false }
  ];

  readonly rewards: Reward[] = [
    { name: 'Profile theme accent', cost: 650, status: 'Available' },
    { name: 'Advanced avatar frame', cost: 900, status: 'Available' },
    { name: 'Bonus challenge hint', cost: 300, status: 'Available' },
    { name: 'Leaderboard glow', cost: 1200, status: 'Locked until Level 5' }
  ];

  get levelProgress(): number {
    return Math.round((this.totalXp / this.nextLevelXp) * 100);
  }
}

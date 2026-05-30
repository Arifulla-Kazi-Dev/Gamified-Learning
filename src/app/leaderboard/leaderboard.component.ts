import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface LeaderboardEntry {
  rank: number;
  name: string;
  track: string;
  xp: number;
  streak: number;
  accuracy: number;
  change: string;
}

@Component({
  selector: 'app-leaderboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './leaderboard.component.html',
  styleUrl: './leaderboard.component.css'
})
export class LeaderboardComponent {
  readonly leaders: LeaderboardEntry[] = [
    { rank: 1, name: 'Aarav K.', track: 'Angular', xp: 12480, streak: 18, accuracy: 91, change: '+2' },
    { rank: 2, name: 'Maya S.', track: 'Full Stack', xp: 11820, streak: 15, accuracy: 89, change: '+1' },
    { rank: 3, name: 'Raj P.', track: 'Embedded', xp: 10940, streak: 12, accuracy: 86, change: '0' },
    { rank: 4, name: 'Nisha R.', track: 'Jira', xp: 10110, streak: 10, accuracy: 84, change: '+4' },
    { rank: 5, name: 'Dev M.', track: 'C Programming', xp: 9750, streak: 9, accuracy: 82, change: '-1' }
  ];

  readonly podium = this.leaders.slice(0, 3);
}

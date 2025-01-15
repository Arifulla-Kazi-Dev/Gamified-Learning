import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  // User Stats
  totalUsers: number = 1500;
  activeUsers: number = 350;
  newSignups: number = 25;
  userGrowthData: number[] = [1200, 1300, 1400, 1500]; // Simulating user growth

  // Course Stats
  totalCourses: number = 45;
  activeCourses: number = 35;
  inactiveCourses: number = 10;
  popularCourses: string[] = ['Intro to Python', 'Advanced Angular', 'Data Science Basics'];

  // Challenges & Rewards
  activeChallenges: number = 5;
  rewardsGiven: number = 200;
  challengeParticipation: number = 120;

  // Revenue Data (if applicable)
  totalRevenue: number = 12500; // Example total revenue in USD
  recentTransactions: any[] = [
    { user: 'John Doe', course: 'Intro to JavaScript', amount: 50 },
    { user: 'Jane Smith', course: 'Machine Learning Basics', amount: 75 }
  ];

  // Admin Activity Logs
  adminActivity: any[] = [
    { action: 'Published a course', timestamp: '2024-10-20' },
    { action: 'Deactivated a user', timestamp: '2024-10-21' }
  ];

  constructor() {}

  ngOnInit(): void {}

}

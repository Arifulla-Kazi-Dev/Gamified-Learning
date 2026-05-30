import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { COURSES } from '../shared/course-data';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  readonly focusCourse = COURSES[0];
  readonly inProgressCourses = COURSES.filter((course) => course.progress > 20).slice(0, 4);

  readonly learnerStats = [
    { label: 'XP earned', value: '8,240', detail: '+420 today' },
    { label: 'Course progress', value: '64%', detail: '3 active paths' },
    { label: 'Quiz accuracy', value: '86%', detail: '+4% this week' },
    { label: 'Challenge streak', value: '12', detail: 'days in a row' }
  ];

  readonly weeklyMomentum = [
    { day: 'Mon', xp: 220 },
    { day: 'Tue', xp: 300 },
    { day: 'Wed', xp: 180 },
    { day: 'Thu', xp: 360 },
    { day: 'Fri', xp: 420 },
    { day: 'Sat', xp: 250 },
    { day: 'Sun', xp: 150 }
  ];

  readonly todayPlan = [
    { title: 'Complete Angular forms checkpoint', type: 'Quiz', xp: 180, status: 'Ready' },
    { title: 'Submit daily string challenge', type: 'Challenge', xp: 90, status: 'In progress' },
    { title: 'Review routing notes', type: 'Lesson', xp: 60, status: 'Queued' }
  ];

  readonly skillFocus = [
    { name: 'Angular routing', progress: 78 },
    { name: 'Responsive UI', progress: 72 },
    { name: 'Algorithm speed', progress: 58 },
    { name: 'Testing habits', progress: 46 }
  ];

  readonly earnedBadges = [
    { name: 'Quiz Closer', description: 'Finished 5 quizzes above 80%.' },
    { name: 'Challenge Spark', description: 'Solved 3 coding challenges.' },
    { name: 'Steady Streak', description: 'Maintained a 12-day learning run.' }
  ];

  getMaxXp(): number {
    return Math.max(...this.weeklyMomentum.map((item) => item.xp));
  }
}

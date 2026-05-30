import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { COURSES } from '../shared/course-data';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  readonly activeCourse = COURSES[0];
  readonly recommendedCourses = COURSES.slice(1, 4);

  readonly stats = [
    { label: 'Current streak', value: '12 days' },
    { label: 'Weekly XP', value: '1,480' },
    { label: 'Badges earned', value: '18' },
    { label: 'Quiz accuracy', value: '86%' }
  ];

  readonly quests = [
    { title: 'Finish Forms Checkpoint', meta: '+180 XP', progress: 72 },
    { title: 'Daily string challenge', meta: '+90 XP', progress: 35 },
    { title: 'Review two weak topics', meta: '+60 XP', progress: 52 }
  ];

  constructor(private router: Router) {}

  navigateTo(path: string): void {
    this.router.navigate([path]);
  }
}

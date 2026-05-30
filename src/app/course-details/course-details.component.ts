import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course, COURSES, getCourseById } from '../shared/course-data';

@Component({
  selector: 'app-course-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
  course: Course | undefined;
  otherCourses: Course[] = [];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const courseId = Number(this.route.snapshot.paramMap.get('id'));
    this.course = getCourseById(courseId);

    if (!this.course) {
      this.router.navigate(['/courses']);
      return;
    }

    this.otherCourses = COURSES
      .filter((course) => course.id !== this.course?.id)
      .slice(0, 3);
  }

  goToLesson(lessonId: number): void {
    if (!this.course) {
      return;
    }

    this.router.navigate(['/courses', this.course.id, 'lesson', lessonId]);
  }

  goToCourseLesson(courseId: number, lessonId: number): void {
    this.router.navigate(['/courses', courseId, 'lesson', lessonId]);
  }

  firstLessonId(course: Course): number {
    return course.lessons[0]?.id ?? 1;
  }

  openExternalCourse(url: string): void {
    if (typeof window !== 'undefined') {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  }
}

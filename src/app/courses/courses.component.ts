import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Course, CourseCategory, COURSES } from '../shared/course-data';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  readonly allCourses = COURSES;
  readonly categoryFilters: Array<{ label: string; value: CourseCategory | 'all' }> = [
    { label: 'All', value: 'all' },
    { label: 'Beginner', value: 'beginner' },
    { label: 'Intermediate', value: 'intermediate' },
    { label: 'Advanced', value: 'advanced' }
  ];

  searchTerm = '';
  selectedCategory: CourseCategory | 'all' = 'all';

  constructor(private router: Router) {}

  get filteredCourses(): Course[] {
    const term = this.searchTerm.trim().toLowerCase();

    return this.allCourses.filter((course) => {
      const matchesCategory = this.selectedCategory === 'all' || course.category === this.selectedCategory;
      const matchesSearch =
        !term ||
        course.title.toLowerCase().includes(term) ||
        course.description.toLowerCase().includes(term) ||
        course.tags.some((tag) => tag.toLowerCase().includes(term));

      return matchesCategory && matchesSearch;
    });
  }

  get featuredCourses(): Course[] {
    return this.allCourses
      .filter((course) => course.progress >= 50)
      .slice(0, 3);
  }

  setCategory(category: CourseCategory | 'all'): void {
    this.selectedCategory = category;
  }

  viewDetails(courseId: number): void {
    this.router.navigate(['/courses', courseId]);
  }

  trackByCourseId(_index: number, course: Course): number {
    return course.id;
  }
}

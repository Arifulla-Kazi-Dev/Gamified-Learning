import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

interface Course {
  id: number;
  title: string;
  description: string;
  duration: string;
  instructor: string;
  image: string;
  category: string;
}

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  allCourses: Course[] = [
    { id: 1, title: 'Angular - The Complete Guide (2024 Edition)', description: 'Advance Course', duration: '55.5h', instructor: 'Maximilian Schwarzmüller', image: 'course-image-1', category: 'advanced' },
    { id: 2, title: 'Front End Web Development with Javascript HTML CSS Bootstrap', description: 'Beginner Topics', duration: '27h', instructor: 'OAK Academy Team', image: 'course-image-2', category: 'beginner' },
    { id: 3, title: 'The Complete 2024 Web Development Bootcamp', description: 'Intermediate Concepts', duration: '61h', instructor: 'Dr. Angela Yu', image: 'course-image-3', category: 'intermediate' },
    { id: 4, title: 'C Programming For Beginners - Master the C Language', description: 'Beginner Course', duration: '25.5h', instructor: 'Jason Fedin', image: 'course-image-4', category: 'beginner' },
    { id: 5, title: 'Advanced C Programming Course', description: 'Advance Topics', duration: '29h', instructor: 'Tim Buchalka"s Learn Programming Academy', image: 'course-image-5', category: 'advanced' },
    { id: 6, title: 'Advanced Embedded Systems with Arduino', description: 'Intermediate Concepts', duration: '7h', instructor: 'Amit Rana', image: 'course-image-6', category: 'intermediate' },
    { id: 7, title: 'PCB design with Altium Designer', description: 'Beginner Course', duration: '8h', instructor: 'Unreal magic', image: 'course-image-7', category: 'beginner' },
    { id: 8, title: 'Learn JIRA with real-world examples (+Confluence bonus)', description: 'Intermediate Topics', duration: '11.5h', instructor: 'Kosh Sarkar', image: 'course-image-8', category: 'intermediate' },
    { id: 9, title: 'Introduction to Automotive Design', description: 'Intermediate Concepts', duration: '7h', instructor: 'Michael Santoro', image: 'course-image-9', category: 'beginner' },

    // Add more courses as needed
  ];

  filteredCourses: Course[] = this.allCourses;
  searchTerm: string = '';
  selectedCategory: string = '';
courses: any;

  constructor(private router: Router) {}

  searchCourses() {
    const term = this.searchTerm.toLowerCase();
    this.filterCourses();
    this.filteredCourses = this.filteredCourses.filter(course => 
      course.title.toLowerCase().includes(term)
    );
  }

  filterCourses() {
    this.filteredCourses = this.allCourses.filter(course =>
      (this.selectedCategory ? course.category === this.selectedCategory : true) &&
      (this.searchTerm ? course.title.toLowerCase().includes(this.searchTerm.toLowerCase()) : true)
    );
  }

  viewDetails(courseId: number) {
    this.router.navigate(['/courses', courseId]);
  }

}

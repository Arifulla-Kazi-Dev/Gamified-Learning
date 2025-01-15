// src/app/course-details/course-details.component.ts
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

interface Course {
  id: number;
  title: string;
  description: string;
  duration: string;
  instructor: string;
  image: string;
  category: string;
  url: string; // URL for course link
}

@Component({
  selector: 'app-course-details',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
  course: Course | undefined;

  courses: Course[] = [
    { id: 1, title: 'Angular - The Complete Guide (2024 Edition)', description: 'Advanced Course', duration: '55.5h', instructor: 'Maximilian Schwarzmüller', image: './../Assets/course1.jpg', category: 'advanced', url: 'https://www.udemy.com/course/the-complete-guide-to-angular-2/?kw=Angular+-+The+Complete+Guide+%282024+Edition%29&src=sac&couponCode=DIWALIMT102824' },
    { id: 2, title: 'Front End Web Development with Javascript HTML CSS Bootstrap', description: 'Beginner Topics', duration: '27h', instructor: 'OAK Academy Team', image: 'assets/images/course-image-2.jpg', category: 'beginner', url: 'https://www.udemy.com/course/full-front-end-web-development-course/?kw=Front+End+Web+Development+with+Javascript+HTML+CSS+Bootstrap&src=sac&couponCode=DIWALIMT102824' },
    { id: 3, title: 'The Complete 2024 Web Development Bootcamp', description: 'Intermediate Concepts', duration: '61h', instructor: 'Dr. Angela Yu', image: 'assets/images/course-image-3.jpg', category: 'intermediate', url: 'https://www.udemy.com/course/the-complete-web-development-bootcamp/?kw=The+Complete+2024+Web+Development+Bootcamp&src=sac&couponCode=DIWALIMT102824' },
    { id: 4, title: 'C Programming For Beginners - Master the C Language', description: 'Beginner Course', duration: '25.5h', instructor: 'Jason Fedin', image: 'assets/images/course-image-4.jpg', category: 'beginner', url: 'https://www.udemy.com/course/c-programming-for-beginners-/?couponCode=DIWALIMT102824' },
    { id: 5, title: 'Advanced C Programming Course', description: 'Advanced Topics', duration: '29h', instructor: 'Tim Buchalka"s Learn Programming Academy', image: 'assets/images/course-image-5.jpg', category: 'advanced', url: 'https://www.udemy.com/course/advanced-c-programming-course/?couponCode=DIWALIMT102824' },
    { id: 6, title: 'Advanced Embedded Systems with Arduino', description: 'Intermediate Concepts', duration: '7h', instructor: 'Amit Rana', image: 'assets/images/course-image-6.jpg', category: 'intermediate', url: 'https://www.udemy.com/course/learn-to-build-advanced-embedded-systems-using-arduino/?couponCode=DIWALIMT102824' },
    { id: 7, title: 'PCB design with Altium Designer', description: 'Beginner Course', duration: '8h', instructor: 'Unreal Magic', image: 'assets/images/course-image-7.jpg', category: 'beginner', url: 'https://www.udemy.com/course/pcb-design-with-altium-designer-2022-latest-version/?couponCode=DIWALIMT102824' },
    { id: 8, title: 'Learn JIRA with real-world examples (+Confluence bonus)', description: 'Intermediate Topics', duration: '11.5h', instructor: 'Kosh Sarkar', image: 'assets/images/course-image-8.jpg', category: 'intermediate', url: 'https://www.udemy.com/course/the-complete-guide-to-jira-with-real-world-examples/?couponCode=DIWALIMT102824' },
    { id: 9, title: 'Introduction to Automotive Design', description: 'Intermediate Concepts', duration: '7h', instructor: 'Michael Santoro', image: 'assets/images/course-image-9.jpg', category: 'beginner', url: 'https://www.udemy.com/course/introduction-to-automotive-design/?couponCode=DIWALIMT102824' },
  ];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const courseId = Number(this.route.snapshot.paramMap.get('id'));
    this.course = this.courses.find(c => c.id === courseId);
    
    if (!this.course) {
      console.error('Course not found!');
      // Optionally navigate to a 404 or courses page if no course is found
      this.router.navigate(['/courses']);
    }
  }

  goToCourse(url: string): void {
    window.open(url, '_blank'); // Open course link in a new tab
  }
}

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Course, CourseLesson, getCourseById } from '../shared/course-data';

interface QuizOption {
  label: string;
  correct: boolean;
}

@Component({
  selector: 'app-lesson',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './lesson.component.html',
  styleUrl: './lesson.component.css'
})
export class LessonComponent implements OnInit {
  course: Course | undefined;
  lesson: CourseLesson | undefined;
  selectedAnswer = '';
  hasSubmitted = false;

  readonly checkpoints = [
    'Name the goal before writing code.',
    'Test the smallest useful behavior.',
    'Connect the result back to the reward milestone.'
  ];

  readonly quizOptions: QuizOption[] = [
    { label: 'Break the feature into routes, state, validation, and visual feedback.', correct: true },
    { label: 'Start styling first and add behavior after the last screen is finished.', correct: false },
    { label: 'Skip the quiz step if the lesson already includes a challenge.', correct: false }
  ];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const courseId = Number(this.route.snapshot.paramMap.get('id'));
    const lessonId = Number(this.route.snapshot.paramMap.get('lessonId'));

    this.course = getCourseById(courseId);
    this.lesson = this.course?.lessons.find((item) => item.id === lessonId);

    if (!this.course || !this.lesson) {
      this.router.navigate(['/courses']);
    }
  }

  selectAnswer(option: QuizOption): void {
    this.selectedAnswer = option.label;
    this.hasSubmitted = false;
  }

  submitQuiz(): void {
    this.hasSubmitted = true;
  }

  isSelectedCorrect(): boolean {
    return this.quizOptions.some((option) => option.label === this.selectedAnswer && option.correct);
  }

  goToCourse(): void {
    if (this.course) {
      this.router.navigate(['/courses', this.course.id]);
    }
  }

  goToNextLesson(): void {
    if (!this.course || !this.lesson) {
      return;
    }

    const currentIndex = this.course.lessons.findIndex((item) => item.id === this.lesson?.id);
    const nextLesson = this.course.lessons[currentIndex + 1];

    if (nextLesson) {
      this.router.navigate(['/courses', this.course.id, 'lesson', nextLesson.id]);
      return;
    }

    this.router.navigate(['/challenges']);
  }
}

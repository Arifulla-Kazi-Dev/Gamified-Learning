export type CourseCategory = 'beginner' | 'intermediate' | 'advanced';

export interface CourseLesson {
  id: number;
  title: string;
  summary: string;
  duration: string;
  type: 'Lesson' | 'Quiz' | 'Challenge';
  completed: boolean;
}

export interface Course {
  id: number;
  title: string;
  description: string;
  duration: string;
  instructor: string;
  image: string;
  category: CourseCategory;
  level: string;
  progress: number;
  xp: number;
  rating: number;
  learners: string;
  tags: string[];
  url: string;
  nextMilestone: string;
  lessons: CourseLesson[];
}

export const COURSES: Course[] = [
  {
    id: 1,
    title: 'Angular - The Complete Guide',
    description: 'Build modern Angular apps with components, routing, forms, APIs, and production patterns.',
    duration: '55.5h',
    instructor: 'Maximilian Schwarzmuller',
    image: 'assets/course1.jpg',
    category: 'advanced',
    level: 'Advanced',
    progress: 68,
    xp: 2400,
    rating: 4.8,
    learners: '18.2k',
    tags: ['Angular', 'SPA', 'TypeScript'],
    nextMilestone: 'Ship a routed capstone app',
    url: 'https://www.udemy.com/course/the-complete-guide-to-angular-2/',
    lessons: [
      { id: 1, title: 'Component Architecture', summary: 'Turn a feature brief into reusable Angular components.', duration: '18 min', type: 'Lesson', completed: true },
      { id: 2, title: 'Routing Lab', summary: 'Create nested routes and active navigation states.', duration: '22 min', type: 'Challenge', completed: true },
      { id: 3, title: 'Forms Checkpoint', summary: 'Validate template-driven and reactive form decisions.', duration: '12 min', type: 'Quiz', completed: false },
      { id: 4, title: 'Production Build Review', summary: 'Tune assets, budgets, and deploy-ready settings.', duration: '20 min', type: 'Lesson', completed: false }
    ]
  },
  {
    id: 2,
    title: 'Front End Web Development',
    description: 'Learn HTML, CSS, JavaScript, and Bootstrap fundamentals through focused interface projects.',
    duration: '27h',
    instructor: 'OAK Academy Team',
    image: 'assets/course2.jpg',
    category: 'beginner',
    level: 'Beginner',
    progress: 42,
    xp: 1300,
    rating: 4.6,
    learners: '12.8k',
    tags: ['HTML', 'CSS', 'JavaScript'],
    nextMilestone: 'Build a responsive portfolio',
    url: 'https://www.udemy.com/course/full-front-end-web-development-course/',
    lessons: [
      { id: 1, title: 'Semantic HTML Sprint', summary: 'Structure accessible pages with clear document flow.', duration: '15 min', type: 'Lesson', completed: true },
      { id: 2, title: 'Responsive CSS Quest', summary: 'Use grids, spacing, and media queries with confidence.', duration: '24 min', type: 'Challenge', completed: false },
      { id: 3, title: 'JavaScript Basics Quiz', summary: 'Check variables, functions, events, and DOM updates.', duration: '10 min', type: 'Quiz', completed: false }
    ]
  },
  {
    id: 3,
    title: 'Full Stack Web Development Bootcamp',
    description: 'Go from web foundations to full stack workflows with polished projects and review checkpoints.',
    duration: '61h',
    instructor: 'Dr. Angela Yu',
    image: 'assets/course3.jpg',
    category: 'intermediate',
    level: 'Intermediate',
    progress: 54,
    xp: 2100,
    rating: 4.7,
    learners: '25.4k',
    tags: ['Node', 'APIs', 'Projects'],
    nextMilestone: 'Connect a REST API',
    url: 'https://www.udemy.com/course/the-complete-web-development-bootcamp/',
    lessons: [
      { id: 1, title: 'Project Planning', summary: 'Break a full stack feature into client and server tasks.', duration: '14 min', type: 'Lesson', completed: true },
      { id: 2, title: 'API Integration', summary: 'Fetch, render, and handle failed requests gracefully.', duration: '28 min', type: 'Challenge', completed: false },
      { id: 3, title: 'Data Flow Quiz', summary: 'Confirm how state moves through a full stack feature.', duration: '11 min', type: 'Quiz', completed: false }
    ]
  },
  {
    id: 4,
    title: 'C Programming for Beginners',
    description: 'Master variables, control flow, pointers, and memory basics through short practice loops.',
    duration: '25.5h',
    instructor: 'Jason Fedin',
    image: 'assets/course4',
    category: 'beginner',
    level: 'Beginner',
    progress: 24,
    xp: 900,
    rating: 4.5,
    learners: '9.1k',
    tags: ['C', 'Memory', 'Logic'],
    nextMilestone: 'Solve pointer drills',
    url: 'https://www.udemy.com/course/c-programming-for-beginners-/',
    lessons: [
      { id: 1, title: 'Control Flow Warmup', summary: 'Practice branching and loops with readable C code.', duration: '17 min', type: 'Lesson', completed: true },
      { id: 2, title: 'Pointer Practice', summary: 'Trace addresses and values before running the program.', duration: '25 min', type: 'Challenge', completed: false },
      { id: 3, title: 'Memory Quiz', summary: 'Check stack, heap, and pointer fundamentals.', duration: '9 min', type: 'Quiz', completed: false }
    ]
  },
  {
    id: 5,
    title: 'Advanced C Programming',
    description: 'Deepen systems thinking with memory management, files, structures, and debugging tactics.',
    duration: '29h',
    instructor: 'Tim Buchalka Academy',
    image: 'assets/course5.jpg',
    category: 'advanced',
    level: 'Advanced',
    progress: 77,
    xp: 2600,
    rating: 4.6,
    learners: '7.6k',
    tags: ['C', 'Systems', 'Debugging'],
    nextMilestone: 'Refactor a file parser',
    url: 'https://www.udemy.com/course/advanced-c-programming-course/',
    lessons: [
      { id: 1, title: 'Struct Design', summary: 'Model data with structs and safer ownership rules.', duration: '21 min', type: 'Lesson', completed: true },
      { id: 2, title: 'File Parser Challenge', summary: 'Read and validate records from a text file.', duration: '32 min', type: 'Challenge', completed: true },
      { id: 3, title: 'Debugging Review', summary: 'Identify leaks, invalid reads, and boundary errors.', duration: '13 min', type: 'Quiz', completed: false }
    ]
  },
  {
    id: 6,
    title: 'Embedded Systems with Arduino',
    description: 'Prototype hardware workflows with sensors, timing, serial output, and reliable iteration habits.',
    duration: '7h',
    instructor: 'Amit Rana',
    image: 'assets/course6.jpg',
    category: 'intermediate',
    level: 'Intermediate',
    progress: 35,
    xp: 1250,
    rating: 4.4,
    learners: '6.4k',
    tags: ['Arduino', 'IoT', 'Sensors'],
    nextMilestone: 'Calibrate a sensor loop',
    url: 'https://www.udemy.com/course/learn-to-build-advanced-embedded-systems-using-arduino/',
    lessons: [
      { id: 1, title: 'Board Setup', summary: 'Prepare the IDE, board, and serial monitor workflow.', duration: '12 min', type: 'Lesson', completed: true },
      { id: 2, title: 'Sensor Loop Lab', summary: 'Read sensor values and smooth noisy input.', duration: '26 min', type: 'Challenge', completed: false },
      { id: 3, title: 'Timing Quiz', summary: 'Review delays, polling, and event timing tradeoffs.', duration: '8 min', type: 'Quiz', completed: false }
    ]
  },
  {
    id: 7,
    title: 'PCB Design with Altium Designer',
    description: 'Plan circuits, place components, route boards, and prepare a practical fabrication handoff.',
    duration: '8h',
    instructor: 'Unreal Magic',
    image: 'assets/course7.jpg',
    category: 'beginner',
    level: 'Beginner',
    progress: 18,
    xp: 750,
    rating: 4.3,
    learners: '4.9k',
    tags: ['PCB', 'Hardware', 'Design'],
    nextMilestone: 'Route a two-layer board',
    url: 'https://www.udemy.com/course/pcb-design-with-altium-designer-2022-latest-version/',
    lessons: [
      { id: 1, title: 'Schematic Setup', summary: 'Create a clean schematic with reusable symbols.', duration: '16 min', type: 'Lesson', completed: true },
      { id: 2, title: 'Routing Challenge', summary: 'Route traces while respecting spacing constraints.', duration: '30 min', type: 'Challenge', completed: false },
      { id: 3, title: 'Fabrication Quiz', summary: 'Check layers, drills, and export package basics.', duration: '10 min', type: 'Quiz', completed: false }
    ]
  },
  {
    id: 8,
    title: 'JIRA with Real-World Examples',
    description: 'Run product work with boards, issues, workflows, Confluence, and team-ready reporting.',
    duration: '11.5h',
    instructor: 'Kosh Sarkar',
    image: 'assets/course8.jpg',
    category: 'intermediate',
    level: 'Intermediate',
    progress: 61,
    xp: 1650,
    rating: 4.5,
    learners: '10.3k',
    tags: ['Jira', 'Agile', 'Workflow'],
    nextMilestone: 'Design a release board',
    url: 'https://www.udemy.com/course/the-complete-guide-to-jira-with-real-world-examples/',
    lessons: [
      { id: 1, title: 'Board Anatomy', summary: 'Map backlog, sprint, and done states to team rituals.', duration: '13 min', type: 'Lesson', completed: true },
      { id: 2, title: 'Workflow Builder', summary: 'Create statuses, transitions, and review gates.', duration: '24 min', type: 'Challenge', completed: true },
      { id: 3, title: 'Reporting Quiz', summary: 'Choose the right chart for delivery questions.', duration: '9 min', type: 'Quiz', completed: false }
    ]
  },
  {
    id: 9,
    title: 'Introduction to Automotive Design',
    description: 'Explore vehicle design basics, package constraints, sketches, and critique-led iteration.',
    duration: '7h',
    instructor: 'Michael Santoro',
    image: 'assets/course9.jpg',
    category: 'beginner',
    level: 'Beginner',
    progress: 29,
    xp: 820,
    rating: 4.4,
    learners: '3.8k',
    tags: ['Design', 'Automotive', 'Sketching'],
    nextMilestone: 'Submit a concept board',
    url: 'https://www.udemy.com/course/introduction-to-automotive-design/',
    lessons: [
      { id: 1, title: 'Design Brief', summary: 'Translate constraints into a clear creative direction.', duration: '14 min', type: 'Lesson', completed: true },
      { id: 2, title: 'Sketch Review', summary: 'Improve a concept through proportion and surface notes.', duration: '22 min', type: 'Challenge', completed: false },
      { id: 3, title: 'Critique Quiz', summary: 'Identify strong, specific design feedback.', duration: '8 min', type: 'Quiz', completed: false }
    ]
  }
];

export function getCourseById(id: number): Course | undefined {
  return COURSES.find((course) => course.id === id);
}

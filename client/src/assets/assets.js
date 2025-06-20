// assets.js

import cssThumbnail from "../assets/css-course-thumbnail.png";
import jsThumbnail from "../assets/js-course-thumbnail.png";
import reactThumbnail from "../assets/react-course-thumbnail.png";
import nodeThumbnail from "../assets/css-course-thumbnail.png";
import figmaThumbnail from "../assets/css-course-thumbnail.png";
import pythonThumbnail from "../assets/css-course-thumbnail.png";
import gitThumbnail from "../assets/js-course-thumbnail.png";
import sqlThumbnail from "../assets/js-course-thumbnail.png";
import james from "../assets/james.jpg";
import sofia from "../assets/sofia.jpg";
import imani from "../assets/imani.jpg"
export const coursesData = [
  {
    id: "course-css-001",
    title: "CSS Full Course 2025",
    description:
      "Master modern web styling with our complete CSS course. From zero to advanced layouts.",
    author: "Kaosiso Nwachukwu",
    rating: 4.8,
    totalReviews: 1240,
    price: "$10",
    thumbnail: cssThumbnail,
    category: "Web Development",
    level: "Beginner to Advanced",
    language: "English",
    duration: "12h 45m",
    tags: ["CSS", "Web Design", "Frontend"],
    isPublished: true,
    createdOn: "2025-06-01",
    updatedOn: "2025-06-10",

    courseContent: [
      {
        chapterId: "ch-001",
        chapterTitle: "Getting Started",
        chapterOrder: 1,
        lectures: [
          {
            lectureId: "lec-001",
            lectureTitle: "Introduction to CSS",
            lectureDuration: "5m",
            lectureOrder: 1,
          },
          {
            lectureId: "lec-002",
            lectureTitle: "Setting up Environment",
            lectureDuration: "10m",
            lectureOrder: 2,
          },
        ],
      },
      {
        chapterId: "ch-002",
        chapterTitle: "CSS Fundamentals",
        chapterOrder: 2,
        lectures: [
          {
            lectureId: "lec-003",
            lectureTitle: "Selectors and Properties",
            lectureDuration: "20m",
            lectureOrder: 1,
          },
          {
            lectureId: "lec-004",
            lectureTitle: "Box Model Explained",
            lectureDuration: "15m",
            lectureOrder: 2,
          },
        ],
      },
    ],
  },

  {
    id: "course-js-002",
    title: "JavaScript Essentials 2025",
    description:
      "Learn JavaScript from scratch. Perfect for web development and problem-solving.",
    author: "Jane Doe",
    rating: 4.7,
    totalReviews: 980,
    price: "$10",
    thumbnail: jsThumbnail,
    category: "Programming",
    level: "Beginner",
    language: "English",
    duration: "10h 30m",
    tags: ["JavaScript", "Web Development", "Logic"],
    isPublished: true,
    createdOn: "2025-05-20",
    updatedOn: "2025-06-08",

    courseContent: [
      {
        chapterId: "ch-101",
        chapterTitle: "Introduction to JavaScript",
        chapterOrder: 1,
        lectures: [
          {
            lectureId: "lec-101",
            lectureTitle: "What is JavaScript?",
            lectureDuration: "8m",
            lectureOrder: 1,
          },
          {
            lectureId: "lec-102",
            lectureTitle: "Variables and Data Types",
            lectureDuration: "12m",
            lectureOrder: 2,
          },
        ],
      },
      {
        chapterId: "ch-102",
        chapterTitle: "DOM and Events",
        chapterOrder: 2,
        lectures: [
          {
            lectureId: "lec-103",
            lectureTitle: "Manipulating the DOM",
            lectureDuration: "20m",
            lectureOrder: 1,
          },
          {
            lectureId: "lec-104",
            lectureTitle: "Event Handling",
            lectureDuration: "15m",
            lectureOrder: 2,
          },
        ],
      },
    ],
  },

  {
    id: "course-react-003",
    title: "React for Beginners",
    description:
      "Build modern UIs with React. Learn components, hooks, and state management.",
    author: "John Smith",
    rating: 4.9,
    totalReviews: 1500,
    price: "$10",
    thumbnail: reactThumbnail,
    category: "Frontend Frameworks",
    level: "Intermediate",
    language: "English",
    duration: "15h 00m",
    tags: ["React", "Hooks", "JSX"],
    isPublished: false,
    createdOn: "2025-06-05",
    updatedOn: "2025-06-11",

    courseContent: [
      {
        chapterId: "ch-201",
        chapterTitle: "React Basics",
        chapterOrder: 1,
        lectures: [
          {
            lectureId: "lec-201",
            lectureTitle: "Intro to React",
            lectureDuration: "10m",
            lectureOrder: 1,
          },
          {
            lectureId: "lec-202",
            lectureTitle: "JSX and Rendering",
            lectureDuration: "18m",
            lectureOrder: 2,
          },
        ],
      },
      {
        chapterId: "ch-202",
        chapterTitle: "React State and Props",
        chapterOrder: 2,
        lectures: [
          {
            lectureId: "lec-203",
            lectureTitle: "Using useState",
            lectureDuration: "25m",
            lectureOrder: 1,
          },
          {
            lectureId: "lec-204",
            lectureTitle: "Passing Props",
            lectureDuration: "20m",
            lectureOrder: 2,
          },
        ],
      },
    ],
  },
  {
    id: "course-node-004",
    title: "Node.js API Development",
    description:
      "Create scalable backends using Express and Node.js. Learn REST APIs, middleware, and deployment.",
    author: "Ada Lovelace",
    rating: 4.6,
    totalReviews: 1100,
    price: "$10",
    thumbnail: nodeThumbnail, // 🖼️ Add this image to your assets
    category: "Backend Development",
    level: "Intermediate",
    language: "English",
    duration: "13h 20m",
    tags: ["Node.js", "Express", "API"],
    isPublished: true,
    createdOn: "2025-04-15",
    updatedOn: "2025-05-01",

    courseContent: [
      {
        chapterId: "ch-301",
        chapterTitle: "Intro to Node.js",
        chapterOrder: 1,
        lectures: [
          {
            lectureId: "lec-301",
            lectureTitle: "What is Node.js?",
            lectureDuration: "12m",
            lectureOrder: 1,
          },
          {
            lectureId: "lec-302",
            lectureTitle: "Installing Node & NPM",
            lectureDuration: "10m",
            lectureOrder: 2,
          },
        ],
      },
      {
        chapterId: "ch-302",
        chapterTitle: "Building APIs",
        chapterOrder: 2,
        lectures: [
          {
            lectureId: "lec-303",
            lectureTitle: "Creating Express Server",
            lectureDuration: "20m",
            lectureOrder: 1,
          },
          {
            lectureId: "lec-304",
            lectureTitle: "CRUD Operations",
            lectureDuration: "25m",
            lectureOrder: 2,
          },
        ],
      },
    ],
  },
  {
    id: "course-figma-005",
    title: "Figma for UI/UX Design",
    description:
      "Design beautiful interfaces and prototypes with Figma. Ideal for aspiring UI/UX designers.",
    author: "Grace Hopper",
    rating: 4.8,
    totalReviews: 890,
    price: "$9",
    thumbnail: figmaThumbnail, // 🖼️ Add this image to your assets
    category: "Design",
    level: "Beginner to Intermediate",
    language: "English",
    duration: "9h 15m",
    tags: ["UI Design", "Prototyping", "Figma"],
    isPublished: true,
    createdOn: "2025-03-28",
    updatedOn: "2025-04-12",

    courseContent: [
      {
        chapterId: "ch-401",
        chapterTitle: "Getting Started with Figma",
        chapterOrder: 1,
        lectures: [
          {
            lectureId: "lec-401",
            lectureTitle: "Creating a Figma Account",
            lectureDuration: "5m",
            lectureOrder: 1,
          },
          {
            lectureId: "lec-402",
            lectureTitle: "Interface Overview",
            lectureDuration: "12m",
            lectureOrder: 2,
          },
        ],
      },
      {
        chapterId: "ch-402",
        chapterTitle: "Designing Layouts",
        chapterOrder: 2,
        lectures: [
          {
            lectureId: "lec-403",
            lectureTitle: "Using Frames and Components",
            lectureDuration: "18m",
            lectureOrder: 1,
          },
          {
            lectureId: "lec-404",
            lectureTitle: "Prototyping Basics",
            lectureDuration: "15m",
            lectureOrder: 2,
          },
        ],
      },
    ],
  },
  {
    id: "course-python-006",
    title: "Python for Data Analysis",
    description:
      "Analyze real-world data using Python, Pandas, and Matplotlib. Ideal for aspiring data analysts.",
    author: "Tim Berners-Lee",
    rating: 4.7,
    totalReviews: 1320,
    price: "$11",
    thumbnail: pythonThumbnail, // 🖼️ Add this image to your assets
    category: "Data Science",
    level: "Beginner",
    language: "English",
    duration: "11h 50m",
    tags: ["Python", "Data Analysis", "Pandas"],
    isPublished: false,
    createdOn: "2025-06-01",
    updatedOn: "2025-06-12",

    courseContent: [
      {
        chapterId: "ch-501",
        chapterTitle: "Python Fundamentals",
        chapterOrder: 1,
        lectures: [
          {
            lectureId: "lec-501",
            lectureTitle: "Variables & Data Types",
            lectureDuration: "15m",
            lectureOrder: 1,
          },
          {
            lectureId: "lec-502",
            lectureTitle: "Control Flow",
            lectureDuration: "20m",
            lectureOrder: 2,
          },
        ],
      },
      {
        chapterId: "ch-502",
        chapterTitle: "Data Analysis with Pandas",
        chapterOrder: 2,
        lectures: [
          {
            lectureId: "lec-503",
            lectureTitle: "Loading CSV Files",
            lectureDuration: "18m",
            lectureOrder: 1,
          },
          {
            lectureId: "lec-504",
            lectureTitle: "Basic Data Cleaning",
            lectureDuration: "22m",
            lectureOrder: 2,
          },
        ],
      },
    ],
  },
  {
    id: "course-js-007",
    title: "JavaScript Essentials",
    description:
      "Learn JavaScript from scratch and build dynamic web apps with ease.",
    author: "Brendan Eich",
    rating: 4.5,
    totalReviews: 2450,
    price: "$14",
    thumbnail: jsThumbnail, // 🖼️ Add this image to your assets
    category: "Web Development",
    level: "Beginner",
    language: "English",
    duration: "9h 20m",
    tags: ["JavaScript", "Web", "Frontend"],
    isPublished: true,
    createdOn: "2025-05-20",
    updatedOn: "2025-06-10",

    courseContent: [
      {
        chapterId: "ch-601",
        chapterTitle: "JS Basics",
        chapterOrder: 1,
        lectures: [
          {
            lectureId: "lec-601",
            lectureTitle: "Intro to JS",
            lectureDuration: "10m",
            lectureOrder: 1,
          },
          {
            lectureId: "lec-602",
            lectureTitle: "Variables & Scope",
            lectureDuration: "15m",
            lectureOrder: 2,
          },
        ],
      },
      {
        chapterId: "ch-602",
        chapterTitle: "DOM & Events",
        chapterOrder: 2,
        lectures: [
          {
            lectureId: "lec-603",
            lectureTitle: "DOM Basics",
            lectureDuration: "18m",
            lectureOrder: 1,
          },
          {
            lectureId: "lec-604",
            lectureTitle: "Event Listeners",
            lectureDuration: "21m",
            lectureOrder: 2,
          },
        ],
      },
    ],
  },
  {
    id: "course-react-008",
    title: "React Fundamentals",
    description:
      "Master React.js and build powerful, modern web applications with reusable components.",
    author: "Dan Abramov",
    rating: 4.8,
    totalReviews: 3100,
    price: "$16",
    thumbnail: reactThumbnail,
    category: "Web Development",
    level: "Intermediate",
    language: "English",
    duration: "12h 30m",
    tags: ["React", "JavaScript", "Frontend"],
    isPublished: true,
    createdOn: "2025-04-15",
    updatedOn: "2025-06-11",

    courseContent: [
      {
        chapterId: "ch-701",
        chapterTitle: "React Basics",
        chapterOrder: 1,
        lectures: [
          {
            lectureId: "lec-701",
            lectureTitle: "JSX & Rendering",
            lectureDuration: "14m",
            lectureOrder: 1,
          },
          {
            lectureId: "lec-702",
            lectureTitle: "Components",
            lectureDuration: "17m",
            lectureOrder: 2,
          },
        ],
      },
      {
        chapterId: "ch-702",
        chapterTitle: "State and Props",
        chapterOrder: 2,
        lectures: [
          {
            lectureId: "lec-703",
            lectureTitle: "Using useState",
            lectureDuration: "20m",
            lectureOrder: 1,
          },
          {
            lectureId: "lec-704",
            lectureTitle: "Props Drilling",
            lectureDuration: "19m",
            lectureOrder: 2,
          },
        ],
      },
    ],
  },
  {
    id: "course-sql-009",
    title: "SQL for Beginners",
    description:
      "Master the basics of SQL and learn how to query and manage data in relational databases.",
    author: "Grace Hopper",
    rating: 4.6,
    totalReviews: 1980,
    price: "$10",
    thumbnail: sqlThumbnail,
    category: "Database",
    level: "Beginner",
    language: "English",
    duration: "8h 10m",
    tags: ["SQL", "Database", "Data"],
    isPublished: false,
    createdOn: "2025-05-05",
    updatedOn: "2025-06-08",

    courseContent: [
      {
        chapterId: "ch-801",
        chapterTitle: "SQL Basics",
        chapterOrder: 1,
        lectures: [
          {
            lectureId: "lec-801",
            lectureTitle: "SELECT Statements",
            lectureDuration: "12m",
            lectureOrder: 1,
          },
          {
            lectureId: "lec-802",
            lectureTitle: "Filtering Data",
            lectureDuration: "14m",
            lectureOrder: 2,
          },
        ],
      },
      {
        chapterId: "ch-802",
        chapterTitle: "Joins & Aggregations",
        chapterOrder: 2,
        lectures: [
          {
            lectureId: "lec-803",
            lectureTitle: "INNER JOIN",
            lectureDuration: "16m",
            lectureOrder: 1,
          },
          {
            lectureId: "lec-804",
            lectureTitle: "GROUP BY",
            lectureDuration: "18m",
            lectureOrder: 2,
          },
        ],
      },
    ],
  },
  {
    id: "course-git-010",
    title: "Git & GitHub Crash Course",
    description:
      "Learn how to track code changes and collaborate with others using Git and GitHub.",
    author: "Linus Torvalds",
    rating: 4.9,
    totalReviews: 2670,
    price: "$9",
    thumbnail: gitThumbnail,
    category: "DevOps",
    level: "Beginner",
    language: "English",
    duration: "6h 45m",
    tags: ["Git", "GitHub", "Version Control"],
    isPublished: true,
    createdOn: "2025-06-02",
    updatedOn: "2025-06-12",

    courseContent: [
      {
        chapterId: "ch-901",
        chapterTitle: "Intro to Git",
        chapterOrder: 1,
        lectures: [
          {
            lectureId: "lec-901",
            lectureTitle: "What is Git?",
            lectureDuration: "10m",
            lectureOrder: 1,
          },
          {
            lectureId: "lec-902",
            lectureTitle: "Initializing Repos",
            lectureDuration: "13m",
            lectureOrder: 2,
          },
        ],
      },
      {
        chapterId: "ch-902",
        chapterTitle: "Working with GitHub",
        chapterOrder: 2,
        lectures: [
          {
            lectureId: "lec-903",
            lectureTitle: "GitHub Interface",
            lectureDuration: "11m",
            lectureOrder: 1,
          },
          {
            lectureId: "lec-904",
            lectureTitle: "Pull Requests",
            lectureDuration: "14m",
            lectureOrder: 2,
          },
        ],
      },
    ],
  },
];

export const dummyTestimonial = [
  {
    name: "Alice Johnson",
    role: "Frontend Developer",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    feedback:
      "This course completely transformed my CSS skills. The explanations were super clear and practical This course completely transformed my CSS skills. The explanations were super clear and practical, ",
    rating: 4.5,
  },
  {
    name: "Michael Lee",
    role: "UI/UX Designer",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    feedback:
      "This course completely transformed my CSS skills. The explanations were super clear and practical This course completely transformed my CSS skills. The explanations were super clear and practical, ",
    rating: 5.0,
  },
  {
    name: "Fatima Adeyemi",
    role: "Web Developer",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    feedback:
      " The explanations were super clear and practical This course completely transformed my CSS skills. The explanations were super clear and practical, ",
    rating: 4.0,
  },
];
export const teamMembers = [
  {
    name: "Imani Carter",
    role: "Technical Lead",
    image: imani, // Update with correct image path
  },
  {
    name: "Sofia Rossi",
    role: "Manager",
    image: sofia, // Update with correct image path
  },
  {
    name: "James Anderson",
    role: "CTO",
    image: james, // Update with correct image path
  },
];

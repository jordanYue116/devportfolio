export const siteConfig = {
  name: "Jordan Yue",
  title: "Computer Science Student",
  description: "Portfolio website of Jordan Yue",
  accentColor: "#1d4ed8",
  social: {
    email: "jordantyue@gmail.com",
    linkedin: "https://www.linkedin.com/in/jordan-yue-a31815321/",
    twitter: "",
    github: "https://github.com/jordanYue116",
  },
  aboutMe:
    "Hey, I’m Jordan and I am currently a rising high school senior looking to start a career in software engineering. I am extremely passionate about furthering my knowledge about coding, programming, and software development, and am currently looking for opportunities to expand and apply my technical proficiencies. In my free time, I like to play the piano, play badminton, and develop games.",
  skills: ["Javascript", "Java", "C#", "Python", "HTML", "CSS"],
  projects: [
    {
      name: "Quantum Computer Simulation",
      description:
        "A quantum computer simulated through classical computing to find the ground state of a hydrogen molecule.",
      link: "https://colab.research.google.com/drive/14O9m-nO30NYVZddac6GpWD6EJWMdrVA2?usp=sharing",
      skills: ["Python", "Numpy", "Matplotlib", "OpenFermion", "QuTiP"],
    },
    {
      name: "Spiderman Game Demo",
      description:
        "A proof of concept with a grid-snapping level editor, swinging mechanics, player-tracking enemies, and simulated camera movement",
      link: "https://scratch.mit.edu/projects/876972949/fullscreen/",
      skills: ["Scratch"],
    },
    {
      name: "Timer Terror",
      description:
        "A game that utilizes collisions mechanics, gravity, and an enemy with player position tracking",
      link: "https://scratch.mit.edu/projects/857488086/fullscreen/",
      skills: ["Scratch"],
    },
  ],
  experience: [
    {
      company: "Tech Company",
      title: "Senior Software Engineer",
      dateRange: "Jan 2022 - Present",
      bullets: [
        "Led development of microservices architecture serving 1M+ users",
        "Reduced API response times by 40% through optimization",
        "Mentored team of 5 junior developers",
      ],
    },
    {
      company: "Startup Inc",
      title: "Full Stack Developer",
      dateRange: "Jun 2020 - Dec 2021",
      bullets: [
        "Built and launched MVP product from scratch using React and Node.js",
        "Implemented CI/CD pipeline reducing deployment time by 60%",
        "Collaborated with product team to define technical requirements",
      ],
    },
    {
      company: "Digital Agency",
      title: "Frontend Developer",
      dateRange: "Aug 2018 - May 2020",
      bullets: [
        "Developed responsive web applications for 20+ clients",
        "Improved site performance scores by 35% on average",
        "Introduced modern JavaScript frameworks to legacy codebases",
      ],
    },
  ],
  education: [
    {
      school: "University Name",
      degree: "Bachelor of Science in Computer Science",
      dateRange: "2014 - 2018",
      achievements: [
        "Graduated Magna Cum Laude with 3.8 GPA",
        "Dean's List all semesters",
        "President of Computer Science Club",
      ],
    },
    {
      school: "Online Platform",
      degree: "Full Stack Development Certificate",
      dateRange: "2019",
      achievements: [
        "Completed 500+ hours of coursework",
        "Built 10+ portfolio projects",
        "Specialized in React and Node.js",
      ],
    },
  ],
};

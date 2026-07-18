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
      name: "Gotta Go Fax 3D",
      description:
        "A three dimensional game made in a two dimensional game engine with collision mechanics, infinite terrain generation, and interactive menus",
      link: "https://scratch.mit.edu/projects/815852228/fullscreen/",
      skills: ["Scratch"],
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
      company: "Quantum, Computing, Mathematics, & Physics Program (Berkeley Lab)",
      title: "Summer Intern",
      dateRange: " June 2026 – July 2026",
      bullets: [
        "Collaborated with 15+ fellow interns on teaching quantum computing concepts",
        "Utilized linear algebra, quantum superposition, and logical gates in tandem to build a quantum computer simulation",
        "Presented quantum simulation project to an audience of 30+ people",
      ],
    },
    {
      company: "Hercules High School Robotics Club",
      title: "Coding Lead",
      dateRange: "September 2025 – Present",
      bullets: [
        "Commanded and oversaw 20+ members’ coding progress",
        "Competed in 8 competitions against 8 other schools, solving multiple coding challenges within a  two-minute time constraint to earn points",
        "Contributed to 1st and 2nd place placements in the 2025 and 2026 PiE (Pioneers in Engineering) Robotics Competitions with points scored from aforementioned coding challenges",
      ],
    },
    {
      company: "MESA (Math Engineering Science Achievement) Club",
      title: "Co-President",
      dateRange: "September 2025 – June 2026",
      bullets: [
        "Hosted biweekly general meetings to update 90+ general members about upcoming competition logistics and to check in on project progressions",
        "Managed 5 executive board members and allocated tasks to ensure that all projects received feedback before competitions",
        "Judged and provided constructive criticism on 25+ group projects, from multiple categories,  prior to competitions, to ensure the optimization of scores",
      ],
    },
  ],
  education: [
    {
      school: "Rising Senior",
      degree: "Hercules High School",
      dateRange: "2023-2027",
      achievements: [
        "GPA: 4.5 (Weighted), 4.0 (Unweighted)",
        "SAT: 1550",
        "AP Scholar with Distinction Award",
      ],
    },
  ],
};

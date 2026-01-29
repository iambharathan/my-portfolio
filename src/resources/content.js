import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "BHARATHAN",
  lastName: "K",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Cloud DevOps Engineer",
  avatar: "/images/avatar.jpg",
  email: "bharathanmoorthy@outlook.com",
  location: "India", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Tamil", "Telugu"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}&apos;s Newsletter</>,
  description: (
    <>
      Just in case yall wanna be kept updated with my latest projects and thoughts.
      <br />
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/iambharathan",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/bharathan-k-094894283/",
  },
  
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/Alan.png",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Hi, I&apos;m BHARATHAN — Cloud DevOps Engineer</>,
  featured: {
    display: false,
    title: <>Recent project: <strong className="ml-4">PDF Splitter</strong></>,
    href: "/work/pdf-divider-smart-printing",
  },
  subline: (
    <>
      I&apos;m BHARATHAN, a Cloud DevOps Engineer passionate about building scalable infrastructure,
      <br />automating deployments, and optimizing cloud architecture. Let&apos;s build something reliable.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I am a Computer Science Engineering (Hons) student specializing in Artificial Intelligence & Machine Learning at Christ University. With a strong foundation in full-xstack development and AI/ML, I am passionate about building intuitive user interfaces and leveraging machine learning to solve real-world problems.


      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "ApexPlanet Software Pvt. Ltd.",
        timeframe: "April 2025 – May 2025",
        role: "Web Development Intern",
        achievements: [
          <>
            Completed 10+ structured web development tasks as part of a guided remote internship program.
          </>,
          <>
            Developed and enhanced 5+ responsive web pages using HTML, CSS, and JavaScript.
          </>,
          <>
            Implemented client-side features including forms, validations, and reusable UI components based on provided specifications.
          </>,
          <>
            Debugged and improved frontend logic across multiple task modules to ensure functional correctness and usability.
          </>,
          <>
            Worked in a 100% remote setup, following defined workflows, deadlines, and submission standards, strengthening disciplined execution.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Christ (Deemed to be University)",
        description: <>Currently pursueing software engineering. <br />
        3rd year Btech Computer Science and Engineering (Hons. AIML)</>,
      },
      
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      
      {
        title: "Next.js",
        description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      
    
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: `Blog – ${person.name}`,
  description: `Thoughts and insights by ${person.name}`,
};

const contact = {
  path: "/contact",
  label: "Contact",
  title: `Contact – ${person.name}`,
  description: `Get in touch with ${person.name}`,
};

const work = {
  path: "/project",
  label: "Project",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /project routes
};

const services = {
  path: "/services",
  label: "Services",
  title: `Services – ${person.name}`,
  description: `Services and expertise offered by ${person.name}`,
};

const caseStudies = {
  path: "/case-studies",
  label: "Case Studies",
  title: `Case Studies – ${person.name}`,
  description: `Real projects and results by ${person.name}`,
};

const tools = {
  path: "/tools",
  label: "Tools",
  title: `Tools & Setup – ${person.name}`,
  description: `Development tools and setup used by ${person.name}`,
};

const achievements = {
  path: "/achievements",
  label: "Achievements",
  title: `Achievements – ${person.name}`,
  description: `Certifications, awards, and milestones of ${person.name}`,
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Gallery – ${person.name}`,
  description: `Photo gallery by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, contact, work, services, caseStudies, tools, achievements, gallery };

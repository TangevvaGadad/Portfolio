import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Tangevva",
  lastName: "Gadad",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "FullStack developer",
  avatar: "/images/ash.jpeg",
  location: "Asia/Jakarta", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Kannada" ,"Hindi"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [

  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/TangevvaGadad",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/tangevva-r-gadad-0b20a625a/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:ashwinigadad3@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: "FullStack developer",
  subline: (
    <>
     A passionate Software Engineer and Web Developer with a love for building impactful, scalable, and efficient web applications. I specialize in JavaScript, React, Node.js, and modern full-stack solutions. With a strong foundation in problem-solving, API integrations, and database management, I'm driven by curiosity and continuous learning.
Let's build something meaningful together.
    </>
  ),
};

const about = {
  label: "About",
  title: "See More About me",
  description: `Meet ${person.name}, ${person.role}`,
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
      <h2>Hi, I'm Tangevva — a passionate Web Developer!</h2>

I'm a student at Alva's Institute of Engineering and Technology with a strong enthusiasm for building modern web applications. I have completed training in the MERN stack (MongoDB, Express.js, React, Node.js) and expanded my skills by learning Next.js for building fast and scalable web apps.

I enjoy solving problems, bringing creative ideas to life, and continuously exploring new technologies in the web development space. My goal is to craft seamless, user-friendly digital experiences.
      </>
    ),
  },
  work: {
    display: false, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "FLY",
        timeframe: "2022 - Present",
        role: "Senior Design Engineer",
        achievements: [
          <>
            Redesigned the UI/UX for the FLY platform, resulting in a 20% increase in user
            engagement and 30% faster load times.
          </>,
          <>
            Spearheaded the integration of AI tools into design workflows, enabling designers to
            iterate 50% faster.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Creativ3",
        timeframe: "2018 - 2022",
        role: "Lead Designer",
        achievements: [
          <>
            Developed a design system that unified the brand across multiple platforms, improving
            design consistency by 40%.
          </>,
          <>
            Led a cross-functional team to launch a new product line, contributing to a 15% increase
            in overall company revenue.
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
        name: "Alva's PU college,Moodbidre",
        description: <>Completed Higher Secondary Education (12th Standard).</>,
      },
      {
        name: "Alva's Institute of Engineering and technology",
        description: <>Currently pursuing a Bachelor's degree in Computer Science and Engineering.</>,
      },
    ],
  },
  internships: {
    display: true, // set to false to hide this section
    title: "Internships",
    companies: [
      {
        name: "HacFy",
        description: <>During my internship at Hacfy, I engineered scalable and performant web applications using Next.js, implementing server-side rendering, API integrations, and optimized routing to deliver seamless user experiences.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Programming Languages",
        description: <>C, Java, JavaScript</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          // {
          //   src: "/images/projects/project-01/cover-02.jpg",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
          // {
          //   src: "/images/projects/project-01/cover-03.jpg",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        title: "Web Development",
        description: <>MERN Stack (MongoDB, Express.js, React, Node.js), Next.js</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          // {
          //   src: "/images/projects/project-01/cover-02.jpg",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
          // {
          //   src: "/images/projects/project-01/cover-03.jpg",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        title: "Tools & Platforms",
        description: <>GitHub, Figma,MongoDB Atlas,VS Code,Docker(CLI),Leetcode,HackerRank,Linux,NPM</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          // {
          //   src: "/images/projects/project-01/cover-04.jpg",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/i1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/i3.jpeg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/i4.jpeg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/i5.jpg",
      alt: "image",
      orientation: "horizontal",
    },

    {
      src: "/images/gallery/i6.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/i8.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/i9.JPG",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/i10.JPG",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/i11.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/i12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/i13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/i14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/c1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/c2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/c3.jpeg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/c5.jpeg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/i2.jpeg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/i7.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };

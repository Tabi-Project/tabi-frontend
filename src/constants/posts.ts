import { withBasePath } from "@/constants/paths";

export type Post = {
  id: number;
  slug: string;
  title: string;
  date: string;
  author?: string;
  authorAvatar?: string;
  readTime?: string;
  excerpt: string;
  content?: string;
  image: string;
  category: "news" | "blog" | "events" ;
  featured?: boolean;
};

export const POSTS: Post[] = [
  {
    id: 1,
    slug: "journey-of-a-thousand-mile",
    title: "The Journey of a Thousand Mile Begins with a Step",
    date: "July 10, 2024",
    author: "Amina Rasheedat",
    authorAvatar: withBasePath("/resources/avatar-1.png"),
    readTime: "6 minutes read",
    excerpt:
      "The tech industry offers a world of possibilities for those eager to innovate, create, and problem-solve. Whether you're a student exploring career paths or someone...",
    content: `
      <h2>Introduction: The Importance of Mentorship in Tech</h2>
      <p>Starting a career in tech is an exciting adventure filled with endless opportunities, but it can also be overwhelming. The rapid pace of technological advancement, the ever-changing landscape of skills required, and the competitive job market can pose significant challenges. This is where a mentor comes in—a guiding light to help navigate the complex terrain of the tech industry.</p>
      <h3>What is a Mentor?</h3>
      <p>A mentor is an experienced professional who offers guidance, support, and advice to someone less experienced in their field. In tech, mentors play a crucial role in helping newcomers understand the industry, develop essential skills, and achieve their career goals. Here's how mentors make a difference:</p>
      <h4>1. Providing Guidance and Expertise</h4>
      <p>Mentors bring a wealth of knowledge and experience to the table. They have been through the ups and downs of the industry and can offer invaluable insights into the best practices, common pitfalls, and effective strategies for success.</p>
      <h4>2. Enhancing Skill Development</h4>
      <p>One of the key benefits of having a mentor is the opportunity for skill development. Mentors can offer personalized feedback on your work, helping you improve your technical abilities and coding practices.</p>
      <h4>3. Expanding Your Network</h4>
      <p>In the tech industry, who you know can be just as important as what you know. Mentors can introduce you to their professional network, opening doors to new opportunities, collaborations, and job prospects.</p>
      <h4>4. Offering Support and Motivation</h4>
      <p>The journey in tech can be demanding and sometimes discouraging. Having a mentor means having someone to turn to for encouragement and support. They can help you stay motivated, provide perspective during tough times, and celebrate your achievements.</p>
    `,
    image: withBasePath("/resources/post-1.png"),
    category: "blog",
    featured: true
  },
  {
    id: 2,
    slug: "journey-of-a-thousand-mile-2",
    title: "The Journey of a Thousand Mile Begins with a Step",
    date: "July 10, 2024",
    author: "Amina Rasheedat",
    readTime: "4 minutes read",
    excerpt:
      "The tech industry offers a world of possibilities for those eager to innovate, create, and problem-solve. Whether you're a student exploring...",
    image: withBasePath("/resources/post-2.png"),
    category: "blog",
    featured: false
  },
  {
    id: 3,
    slug: "journey-of-a-thousand-mile-3",
    title: "The Journey of a Thousand Mile Begins with a Step",
    date: "July 10, 2024",
    author: "Amina Rasheedat",
    readTime: "5 minutes read",
    excerpt:
      "The tech industry offers a world of possibilities for those eager to innovate, create, and problem-solve. Whether you're a student exploring...",
    image: withBasePath("/resources/post-2.png"),
    category: "blog",
    featured: false
  },
  {
    id: 4,
    slug: "think-pieces-mentor-in-tech",
    title: "My Think Pieces on the Role of a Mentor in Tech",
    date: "July 10, 2024",
    author: "Amina Rasheedat",
    readTime: "6 minutes read",
    excerpt:
      "The tech industry offers a world of possibilities for those eager to innovate, create, and problem-solve. Whether you're a student exploring career paths or someone...",
    image: withBasePath("/resources/post-3.png"),
    category: "blog",
    featured: false
  },
  {
    id: 5,
    slug: "news-journey-1",
    title: "The Journey of a Thousand Mile Begins with a Step",
    date: "July 10, 2024",
    excerpt:
      "The tech industry offers a world of possibilities for those eager to innovate, create, and problem-solve. Whether you're a student exploring career paths or someone...",
    image: withBasePath("/resources/post-1.png"),
    category: "news",
    featured: true
  },
  {
    id: 6,
    slug: "news-journey-2",
    title: "The Journey of a Thousand Mile Begins with a Step",
    date: "July 10, 2024",
    excerpt:
      "The tech industry offers a world of possibilities for those eager to innovate, create, and problem-solve. Whether you're a student exploring...",
    image: withBasePath("/resources/post-2.png"),
    category: "news",
    featured: false
  },
  {
    id: 7,
    slug: "news-journey-3",
    title: "The Journey of a Thousand Mile Begins with a Step",
    date: "July 10, 2024",
    excerpt:
      "The tech industry offers a world of possibilities for those eager to innovate, create, and problem-solve. Whether you're a student exploring...",
    image: withBasePath("/resources/post-2.png"),
    category: "news",
    featured: false
  },
  {
    id: 8,
    slug: "news-mentor-role",
    title: "My Think Pieces on the Role of a Mentor in Tech",
    date: "July 10, 2024",
    excerpt:
      "The tech industry offers a world of possibilities for those eager to innovate, create, and problem-solve. Whether you're a student exploring career paths or someone...",
    image: withBasePath("/resources/post-3.png"),
    category: "news",
    featured: false
  }
];

export const BLOG_POSTS = POSTS.filter((p) => p.category === "blog");
export const NEWS_POSTS = POSTS.filter((p) => p.category === "news");

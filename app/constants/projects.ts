import { ProjectType } from './enums';
import { Project } from './types';

const projects: Project[] = [
  {
    id: 1,
    title: 'My Wesbite',
    link: 'https://github.com/sullivanyoung/my-website',
    date: 'April 2024',
    technology: 'Remix, React.js, Tailwind CSS, Vercel',
    description:
      'This is the project dedicated to the website you are currently viewing. I developed it using Remix so I could learn a new front end tool and build my own website.',
    type: ProjectType.Personal,
  },
  {
    id: 2,
    title: 'Financial Performance Dashboard',
    date: 'January 2024',
    technology: 'React.js, Node (Express.js), MSSQL, Azure',
    description:
      'Real-time full stack dashboard we built to monitor the successful launch of a new product resulting in a $2.75B annual run-rate.',
    type: ProjectType.Professional,
  },
  {
    id: 3,
    title: 'Native Point-Of-Sale App',
    date: 'September 2023',
    technology: 'React Native, Stripe, Expo, .NET, Azure',
    description:
      'Native application developed for 800 sales agents to sell products, which generated over 1,000 subscriptions and over $500K in revenue within one month.',
    type: ProjectType.Professional,
  },
  {
    id: 4,
    title: 'CoStar Benefits Bot',
    link: 'https://github.com/sullivanyoung/langchain-bot-fe',
    date: 'March 2023',
    technology: 'React.js, Vanilla CSS, LangChain, BerriAI, Vercel',
    description:
      'Created an AI chatbot as part of a hackathon project to address employee inquiries based on the CoStar Group Benefits microsite.',
    type: ProjectType.Personal,
  },
  {
    id: 4,
    title: 'Twitter Sentiment Analysis',
    link: 'https://github.com/sullivanyoung/twitter-sentiment-analysis',
    date: 'March 2023',
    technology: 'Python',
    description:
      'One of my INFO 617 projects dedicated to doing a sentiment analysis for polarity and subjectivity of tweets of any twitter user inputted.',
    type: ProjectType.Academic,
  },
  {
    id: 5,
    title: 'INFO 630 Project',
    link: 'https://github.com/sullivanyoung/info630project',
    date: 'November 2023',
    technology: 'React.js, Tailwind CSS, Node (Express.js)',
    description:
      'Final project for my INFO 630 course as part of my masters curriculum. Built out a front-end based on designs and requirements we gathered throughout the course.',
    type: ProjectType.Academic,
  },
  {
    id: 6,
    title: 'Account Manager Platform',
    date: 'November 2021',
    technology: 'React.js, Stripe, Node (Express.js), .NET, Azure',
    description:
      'Developed a full stack external payment portal that serviced more than 10K users internationally and processed $2.5M in 2023.',
    type: ProjectType.Professional,
  },
  {
    id: 7,
    title: 'Tahzoo Internship Project',
    link: 'https://github.com/magroves/tahzoo-internship-react',
    date: 'May 2021',
    technology: 'React.js, MongoDB, Tailwind CSS, Node (Express.js)',
    description:
      'This was the final project as part of the Tahzoo internship experience. Built a full stack application using the MERN stack that allowed us to manage Premier League clubs.',
    type: ProjectType.Professional,
  },
  {
    id: 8,
    title: 'Blackjack Application',
    link: 'https://github.com/sullivanyoung/info630project',
    date: 'November 2020',
    technology: 'C#',
    description:
      'One of the first applications I ever built in my free time outside of work and school. It was a project dedicated to helping me learn C# and the intricacies of building a windows form application.',
    type: ProjectType.Personal,
  },
];

export default projects;

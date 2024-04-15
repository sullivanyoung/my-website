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
      'This project is dedicated to the creation of the website you are currently viewing. It was developed using Remix as a means to explore a new frontend tool and construct my own website.',
    type: ProjectType.Personal,
  },
  {
    id: 2,
    title: 'Financial Performance Dashboard',
    date: 'January 2024',
    technology: 'React.js, Node (Express.js), MSSQL, Azure',
    description:
      'Real-time full stack dashboard built to monitor the successful launch of a new product resulting in a $2.75B annual run-rate.',
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
      'This project, part of my INFO 617 coursework, focused on conducting sentiment analysis to determine the polarity and subjectivity of tweets from any Twitter user.',
    type: ProjectType.Academic,
  },
  {
    id: 5,
    title: 'INFO 630 Project',
    link: 'https://github.com/sullivanyoung/info630project',
    date: 'November 2023',
    technology: 'React.js, Tailwind CSS, Node (Express.js)',
    description:
      'For my INFO 630 final project, I constructed an interactive front-end according to the designs and requirements compiled over the duration of the course.',
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
      'As the culmination of my Tahzoo internship, I developed a comprehensive full-stack application utilizing the MERN stack dedicated to facilitating the management of Premier League clubs.',
    type: ProjectType.Professional,
  },
  {
    id: 8,
    title: 'Blackjack Application',
    link: 'https://github.com/sullivanyoung/info630project',
    date: 'November 2020',
    technology: 'C#',
    description:
      'This project was one of my earliest endeavors outside of work and school. It served as a platform for me to delve into C# programming and explore the nuances of constructing a Windows Form application.',
    type: ProjectType.Personal,
  },
];

export default projects;

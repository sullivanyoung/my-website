import { Link } from '@remix-run/react';
import { GitHubSVG, LinkedInSVG, MediumSVG, ResumeSVG } from '~/components/svgs';

export default function Index() {
  const downloadResume = () => {
    console.log('downloading resume');
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-center font-bold text-5xl">Full Stack Engineer</h1>
      <div className="flex justify-between p-4 gap-8">
        <a
          className="hover:bg-gray-500 hover:rounded-xl p-4"
          href="https://www.linkedin.com/in/sullivan-young/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInSVG />
          <p className="text-center">LinkedIn</p>
        </a>
        <button className="hover:bg-gray-500 hover:rounded-xl p-4" onClick={downloadResume}>
          <ResumeSVG />
          <p className="text-center">Resume</p>
        </button>
        <a
          className="hover:bg-gray-500 hover:rounded-xl p-4"
          href="https://github.com/sullivanyoung"
          target="_blank"
          rel="noreferrer"
        >
          <GitHubSVG />
          <p className="text-center">GitHub</p>
        </a>
        <a
          className="hover:bg-gray-500 hover:rounded-xl p-4"
          href="https://medium.com/@sullivanyoung"
          target="_blank"
          rel="noreferrer"
        >
          <MediumSVG />
          <p className="text-center">Medium</p>
        </a>
      </div>
      <div className="border-t-4 border-color-gray-200 w-full" />
      <div className="p-12 w-full">
        <h2 className="text-3xl text-white p-1">Big sports enthusiast.</h2>
        <h5 className="text-3xl text-gray-400 p-1">With a big knack for problem solving.</h5>
        <p className="font-bold p-1">
          {`I'm a Fullstack Engineer with over 3 years of experience. 
            I love challenging myself to try new things and learn as much 
            as I can. If I'm not working, I can be found doing Brazilian Jiu Jitsu, 
            Rock Climbing, or hanging out with friends or family.`}
        </p>
        <Link to="/about">
          <p className="mt-5 p-1 text-white text-2xl hover:font-semibold">
            {'Learn more about me >'}
          </p>
        </Link>
      </div>
      <div className="border-t-4 border-color-gray-200 w-full" />
      <div className="p-12 w-full">
        <h3 className="text-3xl text-white font-bold p-1">Medium Blog Posts</h3>
        <div className="flex justify-between p-4 gap-8">
          <a
            href="https://medium.com/@sullivanyoung/what-is-stripe-19f5b046f0b9"
            target="_blank"
            rel="noreferrer"
            className="hover:bg-gray-500 hover:rounded-xl p-4"
          >
            What Is Stripe?
          </a>
          <a
            href="https://medium.com/@sullivanyoung/react-full-dive-the-basics-ef2b858face"
            target="_blank"
            rel="noreferrer"
            className="hover:bg-gray-500 hover:rounded-xl p-4"
          >
            React Full Dive: The Basics
          </a>
          <a
            href="https://medium.com/@sullivanyoung/what-really-is-javascript-origins-and-the-basics-1b4914f355ed"
            target="_blank"
            rel="noreferrer"
            className="hover:bg-gray-500 hover:rounded-xl p-4"
          >
            What really is JavaScript?
          </a>
        </div>
        <a href="https://medium.com/@sullivanyoung" target="_blank" rel="noreferrer">
          <p className="mt-5 p-1 text-white text-2xl hover:font-semibold">
            {'Check out more of my articles here >'}
          </p>
        </a>
      </div>
      <div className="border-t-4 border-color-gray-200 w-full" />
      <div className="p-12 w-full">
        <h4 className="text-3xl text-white font-bold p-1">Sullivan Young</h4>
        <div>
          Add Contact Info Here:
          <p>LinkedIn</p>
          <p>Email</p>
        </div>
        <div>
          Add Sitemap Here:
          <p>Projects</p>
          <p>Blog</p>
          <p>Contact</p>
          <p>Skills</p>
          <p>About</p>
        </div>
      </div>
    </div>
  );
}

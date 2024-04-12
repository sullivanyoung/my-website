import { Link } from '@remix-run/react';
import { GitHubSVG, LinkedInSVG, MediumSVG, ResumeSVG } from '~/components/svgs';

export default function Index() {
  const downloadResume = () => {
    console.log('downloading resume');
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <img src="app/images/paper-airplane.png" alt="paper airplane" width="400" height="500" />
      <h1 className="text-center font-bold text-5xl mt-5">Full Stack Engineer</h1>
      <div className="sm:flex justify-between p-4 gap-8">
        <a
          className="block hover:bg-gray-500 hover:rounded-xl p-4"
          href="https://www.linkedin.com/in/sullivan-young/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInSVG />
          <p className="text-center">LinkedIn</p>
        </a>
        <button className="block hover:bg-gray-500 hover:rounded-xl p-4" onClick={downloadResume}>
          <ResumeSVG />
          <p className="text-center">Resume</p>
        </button>
        <a
          className="block hover:bg-gray-500 hover:rounded-xl p-4"
          href="https://github.com/sullivanyoung"
          target="_blank"
          rel="noreferrer"
        >
          <GitHubSVG />
          <p className="text-center">GitHub</p>
        </a>
        <a
          className="block hover:bg-gray-500 hover:rounded-xl p-4"
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
        <h2 className="text-3xl text-white">Creator of Intangible Things.</h2>
        <h5 className="text-3xl text-gray-400 mt-1">With a passion for problem solving.</h5>
        <p className="font-bold mt-4">
          {`I'm a fullstack engineer with over 3 years of experience. 
            I love challenging myself to try new things and learn as much 
            as I can about Life, Pyschology, Personal Growth and Development, 
            Software Engineering, Investing, and more! If I'm not working/learning, 
            I can be found doing Brazilian Jiu Jitsu, Rock Climbing, or hanging
            out with friends and family.`}
        </p>
        <Link to="/about">
          <p className="mt-5 text-white text-2xl hover:font-semibold">{'Learn more about me >'}</p>
        </Link>
      </div>
      <div className="border-t-4 border-color-gray-200 w-full" />
      <div className="p-12 w-full">
        <h3 className="text-3xl text-white font-bold ">Medium Blog Posts</h3>
        {/* Break out blog posts into reusable components */}
        <div className="block sm:flex justify-between p-4 gap-8">
          <a
            href="https://medium.com/@sullivanyoung/what-is-stripe-19f5b046f0b9"
            target="_blank"
            rel="noreferrer"
            className="font-bold text-white text-2xl"
          >
            <div className="h-full flex flex-col justify-center border-2 border-white text-center hover:bg-gray-500 rounded-xl p-4">
              <img
                src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*EWX-2AsYJ5JtKCBR0bY9EA.png"
                alt="stripe logo"
                className="mb-4"
              />
              What Is Stripe?
            </div>{' '}
          </a>
          <a
            href="https://medium.com/@sullivanyoung/react-full-dive-the-basics-ef2b858face"
            target="_blank"
            rel="noreferrer"
            className="font-bold text-white text-2xl"
          >
            <div className="h-full flex flex-col justify-center  border-2 border-white text-center hover:bg-gray-500 rounded-xl p-4">
              <img
                src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*IoCLrnfGa9GzPimOovQyDg.png"
                alt="stripe logo"
                className="mb-4"
              />
              React Full Dive: The Basics
            </div>
          </a>
          <a
            href="https://medium.com/@sullivanyoung/what-really-is-javascript-origins-and-the-basics-1b4914f355ed"
            target="_blank"
            rel="noreferrer"
            className="font-bold text-white text-2xl"
          >
            <div className="h-full flex flex-col justify-center border-2 border-white text-center hover:bg-gray-500 rounded-xl p-4">
              <img
                src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*wzdbcyGYRmVROsB6GaKSKQ.png"
                alt="stripe logo"
                className="mb-4"
              />
              What really is JavaScript?
            </div>{' '}
          </a>
        </div>
        <a href="https://medium.com/@sullivanyoung" target="_blank" rel="noreferrer">
          <p className="mt-5 text-white text-2xl hover:font-semibold">
            {'Check out more of my articles here >'}
          </p>
        </a>
      </div>
      <div className="border-t-4 border-color-gray-200 w-full" />
      {/* <div className="p-12 w-full">
        <h4 className="text-3xl text-white font-bold ">Sullivan Young</h4>
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
      </div> */}
      <p className="text-gray-500 font-bold mt-4">All rights reserved © Sullivan Young 2024</p>
    </div>
  );
}

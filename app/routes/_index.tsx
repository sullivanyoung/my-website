import { Link } from '@remix-run/react';
import BlogPost from '~/components/blogPost';
import Resource from '~/components/resource';
import { GitHubSVG, LinkedInSVG, MediumSVG, ResumeSVG } from '~/components/svgs';

export default function Index() {
  return (
    <div className="flex flex-col items-center justify-center">
      <img
        className="transform scale-100 duration-100 ease-in-out"
        src="/paper-airplane.png"
        alt="paper airplane"
        width="400"
        height="500"
      />
      <h1 className="text-center font-bold text-5xl mt-5">Full Stack Engineer</h1>
      <div className="sm:flex justify-between p-4 gap-8">
        <Resource
          resourceLink={'https://www.linkedin.com/in/sullivan-young/'}
          resourceSVG={<LinkedInSVG />}
          resourceText={'LinkedIn'}
        />
        <Resource
          resourceLink={'SullivanYoungResume.pdf'}
          resourceSVG={<ResumeSVG />}
          resourceText={'Resume'}
        />
        <Resource
          resourceLink={'https://github.com/sullivanyoung'}
          resourceSVG={<GitHubSVG />}
          resourceText={'GitHub'}
        />
        <Resource
          resourceLink={'https://medium.com/@sullivanyoung'}
          resourceSVG={<MediumSVG />}
          resourceText={'Medium'}
        />
      </div>
      <div className="border-t-4 border-color-gray-200 w-full" />
      <div className="p-12 w-full">
        <h2 className="text-3xl text-white">Creator of Intangible Things.</h2>
        <h5 className="text-3xl text-gray-400 mt-1">With a passion for problem solving.</h5>
        <p className="font-bold mt-4">
          {`I'm a fullstack engineer with over 3 years of experience. 
            I love challenging myself to try new things and learn as much 
            as I can about Life, Software Engineering, Personal Growth and Development,
            Investing, and more! If I'm not working/learning, I can be found doing Brazilian 
            Jiu Jitsu, Rock Climbing, or hanging out with friends and family.`}
        </p>
        <Link to="/about">
          <p className="mt-5 text-white text-2xl hover:font-semibold">{'Learn more about me >'}</p>
        </Link>
      </div>
      <div className="border-t-4 border-color-gray-200 w-full" />
      <div className="p-12 w-full">
        <h3 className="text-3xl text-white font-bold ">Medium Blog Posts</h3>
        <div className="flex flex-col items-center sm:flex-row justify-between p-4 gap-8 lg:gap-16">
          <BlogPost
            blogLink={'https://medium.com/@sullivanyoung/what-is-stripe-19f5b046f0b9'}
            blogImage={
              'https://miro.medium.com/v2/resize:fit:720/format:webp/1*EWX-2AsYJ5JtKCBR0bY9EA.png'
            }
            imageText={'stripe logo'}
            blogText={'What Is Stripe?'}
          />
          <BlogPost
            blogLink={'https://medium.com/@sullivanyoung/react-full-dive-the-basics-ef2b858face'}
            blogImage={
              'https://miro.medium.com/v2/resize:fit:720/format:webp/1*IoCLrnfGa9GzPimOovQyDg.png'
            }
            imageText={'react logo'}
            blogText={'React Full Dive: The Basics'}
          />
          <BlogPost
            blogLink={
              'https://medium.com/@sullivanyoung/what-really-is-javascript-origins-and-the-basics-1b4914f355ed'
            }
            blogImage={
              'https://miro.medium.com/v2/resize:fit:720/format:webp/1*wzdbcyGYRmVROsB6GaKSKQ.png'
            }
            imageText={'javascript logo'}
            blogText={'What really is JavaScript?'}
          />
        </div>
        <Link to="/blog">
          <p className="mt-5 text-white text-2xl hover:font-semibold">
            {'Check out more of my articles >'}
          </p>
        </Link>
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

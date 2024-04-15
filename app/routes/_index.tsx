import { Link } from '@remix-run/react';
import React from 'react';
import BlogPost from '~/components/blogPosts';
import Resource from '~/components/resource';
import { GitHubSVG, LinkedInSVG, MediumSVG, ResumeSVG } from '~/components/svgs';
import useIsVisible from '~/hooks/useIsVisible';

export default function Index() {
  // Top Section
  const ref1 = React.useRef(null);
  const isVisible1 = useIsVisible(ref1);

  // About Me Section
  const ref2 = React.useRef(null);
  const isVisible2 = useIsVisible(ref2);

  // Article Section
  const ref3 = React.useRef(null);
  const isVisible3 = useIsVisible(ref3);

  return (
    <>
      <section
        ref={ref1}
        className={`flex flex-col items-center my-20 justify-center transition-opacity ease-in duration-1000 ${
          isVisible1 ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <img src="/paper-airplane.png" alt="paper airplane" width="400" height="500" />
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
      </section>
      <div className="border-t-4 border-color-gray-200 w-full" />
      <section
        ref={ref2}
        className={`p-8 w-full transition-opacity ease-in duration-1000 ${
          isVisible2 ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <h2 className="text-3xl text-white mt-4">Creator of Intangible Things.</h2>
        <h5 className="text-3xl text-gray-400 mt-4">Dedicated to problem solving.</h5>
        <p className="font-bold my-5">
          {`As a seasoned full-stack engineer with over three years of experience, 
          I thrive on pushing my boundaries and exploring new horizons. My 
          curiosity drives me to delve deep into various domains, from software 
          engineering and personal growth to investing and beyond. When I'm not 
          immersed in work or expanding my knowledge base, you'll often find me 
          grappling on the mats of a Brazilian Jiu-Jitsu studio, scaling the heights
          of a rock-climbing wall, or simply enjoying quality time with loved ones.`}
        </p>
        <Link to="/about" className="text-white text-2xl hover:font-semibold group relative">
          {'Learn more about me'}
          <span className="group-hover:w-full transition-width duration-500 h-0.5 bg-gray-300 absolute bottom-0 left-0 w-0" />
        </Link>
      </section>
      <div className="border-t-4 border-color-gray-200 w-full" />
      <section
        ref={ref3}
        className={`p-8 w-full transition-opacity ease-in duration-1000 ${
          isVisible3 ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <h3 className="text-3xl text-white font-bold my-4">Articles</h3>
        <div className="flex flex-col items-center sm:flex-row justify-between p-4 gap-8 lg:gap-16">
          <BlogPost numOfPosts={3} />
        </div>
        <Link to="/blog" className="text-white text-2xl hover:font-semibold group relative">
          {'Check out more of my articles'}
          <span className="group-hover:w-full transition-width duration-500 h-0.5 bg-gray-300 absolute bottom-0 left-0 w-0" />
        </Link>
      </section>
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
      <p className="text-center text-gray-500 font-bold mt-4">
        All rights reserved © Sullivan Young 2024
      </p>
    </>
  );
}

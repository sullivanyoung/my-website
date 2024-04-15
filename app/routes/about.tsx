import React from 'react';
import Resource from '~/components/resource';
import { GitHubSVG, LinkedInSVG, MediumSVG, ResumeSVG } from '~/components/svgs';
import useIsVisible from '~/hooks/useIsVisible';

export default function About() {
  // About Me Section
  const ref1 = React.useRef(null);
  const isVisible1 = useIsVisible(ref1);

  // How I Got Today Section
  const ref2 = React.useRef(null);
  const isVisible2 = useIsVisible(ref2);

  // // Hobbies Section
  const ref3 = React.useRef(null);
  const isVisible3 = useIsVisible(ref3);

  return (
    <>
      <section
        ref={ref1}
        className={`p-12 block lg:flex w-full gap-8transition-opacity ease-in duration-1000 ${
          isVisible1 ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <img src="/headshot.jpg" alt="headshot" className="h-96 mb-4 mx-auto rounded-md" />
        <div>
          <h2 className="text-3xl text-white text-left">About Me</h2>
          <h5 className="text-3xl text-gray-400 my-4">Full Stack Software Engineer</h5>
          <p className="font-bold mt-4">
            {`I'm a fullstack engineer with over 3 years of experience and many more to come. 
            I love challenging myself to try new things and learn as much 
            as I can about Life, Software Engineering, Personal Growth and Development,
            Investing, and more as seen in my Medium articles. If you want to connect, 
            learn more about me, or something else, my socials are linked below.`}
          </p>
          <div className="flex justify-center lg:gap-16 mt-4 gap-8 flex-row items-center">
            <div className="lg:flex lg:gap-16">
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
            </div>
            <div className="lg:flex lg:gap-16">
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
          </div>
        </div>
      </section>
      <div className="border-t-4 border-color-gray-200 w-full" />
      <section
        ref={ref2}
        className={`p-12 block lg:flex w-full gap-8 transition-opacity ease-in duration-1000 ${
          isVisible2 ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div>
          <h2 className="text-3xl text-white mb-4">How I Got To Where I Am Today</h2>
          <a
            href="https://medium.com/@sullivanyoung/how-i-became-a-software-engineer-without-a-computer-science-degree-4b4bdeba68a"
            target="_blank"
            className="text-3xl text-gray-400 group relative"
            rel="noopener noreferrer"
          >
            Read my full story
            <span className="group-hover:w-full transition-width duration-500 h-0.5 bg-gray-300 absolute bottom-0 left-0 w-0" />
          </a>
          <p className="font-bold my-5">
            {`I was born in 1998 in Richmond, Virginia. I graduated from Goochland High School in 2016 and 
            went on to attend the University of North Carolina Wilmington. I graduated from UNC Wilmington in 2020 
            with a degree in Business Administration and dual concentration of Management Information 
            Systems and Business Analytics. From there, I moved back to Richmond where I got my Masters
            in Information Systems at Virginia Commonwealth University in 2023.`}
          </p>
        </div>
        <img src="/dog.jpg" alt="headshot" className="h-96 mx-auto rounded-md" />
      </section>
      <div className="border-t-4 border-color-gray-200 w-full" />
      <section
        ref={ref3}
        className={`p-12 block lg:flex w-full gap-8 transition-opacity ease-in duration-1000 ${
          isVisible3 ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <img src="/rock-climbing.jpg" alt="headshot" className="h-96 mx-auto mb-4 rounded-md" />
        <div>
          <h2 className="text-3xl text-white">Life, Hobbies, and More...</h2>
          <p className="font-bold mt-4">
            {`If I'm not coding, I'm probably out and about being active somewhere! Throughout my entire childhood, I was an avid soccer 
            player and played for the Richmond Kickers. During college, I was
            on the club volleyball team for all 4 years and played in numerous indoor and sand tournaments.
            After graduating from college during the peak of COVID, I quickly realized just how important exercise is for both my mental and physical health.
            Flash forward a few years later and I discovered the wonderful sports of
            rock climbing and Brazilian jiu-jitsu. The past few years, I've loved the puzzle aspect of both of
            these sports and can often be found in one of those two gyms in Richmond. If I'm not doing one of those two things (which is rare), I'm probably
            hanging out with friends, family, playing disc golf, or on some new adventure!`}
          </p>
        </div>
      </section>
    </>
  );
}

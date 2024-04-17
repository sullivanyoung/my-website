import { json, useLoaderData } from '@remix-run/react';
import React from 'react';
import { getRecentlyPlayedSpotifySong } from '~/api/spotify';
import Resource from '~/components/resource';
import SpotifySong from '~/components/spotify';
import { GitHubSVG, LinkedInSVG, MediumSVG, ResumeSVG } from '~/components/svgs';
import useIsVisible from '~/hooks/useIsVisible';

export async function loader() {
  const spotifySong = await getRecentlyPlayedSpotifySong();

  return json({ spotifySong });
}

export default function About() {
  const { spotifySong } = useLoaderData<typeof loader>();

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
        className={`p-8 block lg:flex w-full gap-8 transition-opacity ease-in duration-1000 ${
          isVisible1 ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <img src="/headshot.jpg" alt="headshot" className="h-96 mb-4 mx-auto rounded-md" />
        <div className="relative">
          <h2 className="text-3xl text-white text-left">About Me</h2>
          <h5 className="text-3xl text-gray-400 my-4">Full Stack Software Engineer</h5>
          <p className="font-bold mt-4">
            {`As an experienced full-stack engineer with a passion for continuous learning
            and growth, I thrive on embracing challenges and exploring diverse domains,
            including software engineering, personal development, investing, and beyond,
            as reflected in my Medium articles. Feel free to connect with me 
            or explore further through my social channels linked below:`}
          </p>
          {spotifySong && <SpotifySong spotifySong={spotifySong} />}
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
        className={`p-8 block lg:flex w-full gap-8 transition-opacity ease-in duration-1000 ${
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
            {`Born in 1998 in Richmond, Virginia, I started on my educational journey by graduating from Goochland High School in 2016.
            I went on to attend the University of North Carolina Wilmington where I graduated in 2020 
            with a Bachelors in Business Administration and dual concentration of Management Information 
            Systems and Business Analytics. After graduating, I returned to Richmond to pursue a Masters 
            in Information Systems at Virginia Commonwealth University, completing my studies in 2023.`}
          </p>
        </div>
        <img src="/dog.jpg" alt="headshot" className="h-96 mx-auto rounded-md" />
      </section>
      <div className="border-t-4 border-color-gray-200 w-full" />
      <section
        ref={ref3}
        className={`p-8 block lg:flex w-full gap-8 transition-opacity ease-in duration-1000 ${
          isVisible3 ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <img src="/rock-climbing.jpg" alt="headshot" className="h-96 mx-auto mb-4 rounded-md" />
        <div>
          <h2 className="text-3xl text-white">Life, Hobbies, and More...</h2>
          <p className="font-bold mt-4">
            {`Beyond coding, you'll often find me immersed in various physical activities. 
            As a child, I thrived as a dedicated soccer player, proudly representing the
            Richmond Kickers for most of my adolescence. Throughout my college years, I 
            indulged my competitive spirit as a member of the club volleyball team, 
            engaging in numerous indoor and sand tournaments. The onset of the COVID era 
            following my graduation from college in 2020 underscored the importance 
            of exercise for both my mental and physical well-being.`}
          </p>
          <p className="font-bold mt-2">
            {`Fast forward to recent years, I've embraced new challenges in rock climbing and Brazilian
            jiu-jitsu. Whether scaling the walls of a climbing gym or grappling on the mats of a jiu-jitsu 
            academy in Richmond, I find solace in the puzzle-like nature of these pursuits. When I'm not engaging 
            these passions (which is a rare occurrence), you might catch me socializing with 
            friends and family, honing my skills in disc golf (still subpar), or embarking on exciting new 
            adventures!`}
          </p>
        </div>
      </section>
    </>
  );
}

import Resource from '~/components/resource';
import { GitHubSVG, LinkedInSVG, MediumSVG, ResumeSVG } from '~/components/svgs';

export default function About() {
  return (
    <div>
      <section className="p-12 block lg:flex w-full gap-8">
        <img src="/headshot.jpg" alt="headshot" className="h-96 mb-4 mx-auto" />
        <div>
          <h2 className="text-3xl text-white text-left">About Me</h2>
          <h5 className="text-3xl text-gray-400 mt-1">Full Stack Software Engineer</h5>
          <p className="font-bold mt-4">
            {`I'm a fullstack engineer with over 3 years of experience and many more to come. 
            I love challenging myself to try new things and learn as much 
            as I can about Life, Software Engineering, Personal Growth and Development,
            Investing, and more as seen in my Medium articles. If you want to connect, 
            learn more about me, or something else, my socials are linked below.`}
          </p>
          <div className="flex justify-between p-4 gap-8 flex-col lg:flex-row items-center">
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
        </div>
      </section>
      <div className="border-t-4 border-color-gray-200 w-full" />
      <section className="p-12 block lg:flex w-full gap-8">
        <div>
          <h2 className="text-3xl text-white mb-2">How I Got To Where I Am Today</h2>
          <a
            href="https://medium.com/@sullivanyoung/how-i-became-a-software-engineer-without-a-computer-science-degree-4b4bdeba68a"
            target="_blank"
            className="text-3xl text-gray-400 group relative"
            rel="noopener noreferrer"
          >
            Read my full story
            <span className="group-hover:w-full transition-width duration-500 h-0.5 bg-gray-300 absolute bottom-0 left-0 w-0" />
          </a>
          <p className="font-bold my-4">
            {`I was born in 1998 in Richmond, Virginia. I graduated from Goochland High School in 2016 and 
            went on to attend the University of North Carolina Wilmington. I graduated from UNC Wilmington in 2020 
            with a degree in Business Administration and dual concentration of Management Information 
            Systems and Business Analytics. From there, I moved back to Richmond where I got my Masters
            in Information Systems at Virginia Commonwealth University and finished in 2023.`}
          </p>
        </div>
        <img src="/dog.jpg" alt="headshot" className="h-96 mx-auto" />
      </section>
      <div className="border-t-4 border-color-gray-200 w-full" />
      <section className="p-12 block lg:flex w-full gap-8">
        <img src="/rock-climbing.jpg" alt="headshot" className="h-96 mx-auto mb-4" />
        <div>
          <h2 className="text-3xl text-white">Life, Hobbies, and More...</h2>
          <p className="font-bold mt-4">
            {`If I'm not found coding, I'm probably out and about somewhere! I was an avid soccer 
            player and played for the Richmond Kickers throughout most of my 
            childhood, even making it on the Academy team for a few years. Throughout college, I was
            on the club volleyball team for all 4 years and played in numerous indoor and sand tournaments.
            After graduating from college, I joined an adult soccer league, but tore my achilles
            in my literal first game! After recovering from the injury, I moved
            onto rock climbing and Brazilian jiu-jitsu where I've loved the puzzle aspect of both of
            these sports. If I'm not doing one of those two things (which is rare), I'm probably
            hanging out with friends, family, playing disc golf, or on some new adventure!`}
          </p>
        </div>
      </section>
    </div>
  );
}

import GitHubSVG from '~/components/svgs/gitHubSVG';
import LinkedInSVG from '~/components/svgs/linkedInSVG';
import ResumeSVG from '~/components/svgs/resumeSVG';

export default function Index() {
  const downloadResume = () => {
    console.log('downloading resume');
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-center font-bold text-xl">Full Stack Engineer</h1>
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
      </div>
      <div className="border-t-4 border-color-gray-200 p-12">Brief About Me</div>
      <div className="border-t-4 border-color-gray-200 p-12">Contact</div>
    </div>
  );
}

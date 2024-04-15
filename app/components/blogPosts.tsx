import React from 'react';
import articles from '~/constants/articles';
import useIsVisible from '~/hooks/useIsVisible';

interface BlogPostsProps {
  numOfPosts: number;
}

export default function BlogPosts({ numOfPosts }: BlogPostsProps) {
  // Blog post ref for slow transition
  const ref = React.useRef(null);
  const isVisible = useIsVisible(ref);

  return (
    <ul
      ref={ref}
      className={`grid grid-cols-1 lg:grid-cols-3 gap-4 justify-center transition-opacity ease-in duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {articles.slice(0, numOfPosts).map((post) => (
        <li key={post.id} className="mb-4">
          <div className="p-4 border-2 border-white rounded-lg overflow-hidden">
            <div className="block sm:flex lg:block justify-between mb-2 relative">
              <img
                src={post.image}
                alt={post.title}
                className="h-64 w-auto mx-auto sm:w-72 lg:w-auto sm:mx-0 lg:mx-auto rounded-md"
              />
              <div className="text-left sm:text-right lg:text-left p-4">
                <p className="text-white mb-2">{post.date}</p>
                <p className="font-bold text-white text-2xl mb-1">{post.title}</p>
                <a
                  href={post.link}
                  className="text-gray-300 hover:font-bold group relative"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on Medium
                  <span className="group-hover:w-full transition-width duration-500 h-0.5 bg-gray-300 absolute bottom-0 left-0 w-0" />
                </a>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

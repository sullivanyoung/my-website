import articles from '~/constants/articles';

interface BlogPostsProps {
  numOfPosts: number;
}

export default function BlogPosts({ numOfPosts }: BlogPostsProps) {
  const randomizeArticles = articles.sort(() => Math.random() - 0.5);

  return (
    <ul className="grid grid-cols-1 lg:grid-cols-3 gap-4 justify-center">
      {randomizeArticles.slice(0, numOfPosts).map((post) => (
        <li key={post.id} className="mb-4">
          <div className="p-4 border-2 border-white rounded-lg">
            <div className="flex lg:block justify-between mb-2 relative">
              <img src={post.image} alt={post.title} className="h-64 w-auto lg:mx-auto" />
              <div className="text-right lg:text-left p-4">
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

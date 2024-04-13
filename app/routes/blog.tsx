import BlogPost from '~/components/blogPosts';
import articles from '~/constants/articles';

export default function Blog() {
  return (
    <div>
      <BlogPost numOfPosts={articles.length} />
    </div>
  );
}

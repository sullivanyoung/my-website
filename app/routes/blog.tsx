import BlogPost from '~/components/blogPosts';
import articles from '~/constants/articles';

export default function Blog() {
  return <BlogPost numOfPosts={articles.length} />;
}

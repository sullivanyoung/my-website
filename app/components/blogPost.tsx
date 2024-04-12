interface BlogPostProps {
  blogLink: string;
  blogImage: string;
  imageText: string;
  blogText: string;
}

export default function BlogPost({ blogLink, blogImage, imageText, blogText }: BlogPostProps) {
  return (
    <a href={blogLink} target="_blank" rel="noreferrer" className="font-bold text-white text-2xl">
      <div className="mb-4 h-full flex flex-col justify-center border-2 border-white text-center hover:bg-gray-500 rounded-xl p-4">
        <img src={blogImage} alt={imageText} className="mb-4" />
        {blogText}
      </div>
    </a>
  );
}

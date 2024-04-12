interface BlogPostProps {
  blogLink: string;
  blogImage: string;
  imageText: string;
  blogText: string;
}

export default function BlogPost({ blogLink, blogImage, imageText, blogText }: BlogPostProps) {
  return (
    <a
      href={blogLink}
      target="_blank"
      rel="noopener noreferrer"
      className="font-bold text-white text-2xl"
    >
      <div className="mb-4 h-64 lg:h-96 w-40 lg:w-96 flex flex-col justify-center border-2 border-white text-center hover:bg-gray-500 rounded-xl p-4">
        <img src={blogImage} alt={imageText} className="mb-4 w-24 h-24 lg:w-48 lg:h-48 mx-auto" />
        {blogText}
      </div>
    </a>
  );
}

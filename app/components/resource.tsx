interface ResourceProps {
  resourceLink: string;
  resourceSVG: React.ReactNode;
  resourceText: string;
}

export default function Resource({ resourceLink, resourceSVG, resourceText }: ResourceProps) {
  return (
    <a
      className="block hover:bg-gray-500 hover:rounded-xl p-4"
      href={resourceLink}
      target="_blank"
      rel="noopener noreferrer"
    >
      {resourceSVG}
      <p className="text-center">{resourceText}</p>
    </a>
  );
}

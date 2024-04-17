import { SpotifyItem } from '~/constants/types';
import SpotifySVG from './svgs/spotifySVG';
import { useMediaQuery } from 'react-responsive';

interface SpotifySongProps {
  spotifySong: SpotifyItem;
}

export default function SpotifySong({ spotifySong }: SpotifySongProps) {
  const truncateName = (name: string, maxLength: number) => {
    return name?.length > maxLength ? `${name?.slice(0, maxLength)}...` : name;
  };

  const isLargeViewport = useMediaQuery({ minWidth: 1280 });

  return (
    <div className="flex justify-center">
      <div className="inline-block mx-auto my-8 xl:my-0 relative xl:absolute top-0 right-0 p-2 rounded-lg font-bold bg-gray-800 text-white">
        <div className="flex justify-between gap-4">
          <p className="mb-2">Listening To:</p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://open.spotify.com/user/sullivanyoung"
            aria-label="Spotify profile"
          >
            <div
              className="display:inline hover:bg-gray-500 rounded-full p-1"
              title="Sully's Spotify"
            >
              <SpotifySVG />
            </div>
          </a>
        </div>
        <a
          href={spotifySong?.externalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex gap-4 items-center hover:underline"
        >
          <img src={spotifySong?.albumImages[0]} className="w-10 h-10 rounded-md" />
          <span title={`${spotifySong?.name} by ${spotifySong?.artists[0]}`}>
            {isLargeViewport ? truncateName(spotifySong?.name, 22) : spotifySong?.name} by{' '}
            {spotifySong?.artists[0]}
          </span>
        </a>
      </div>
    </div>
  );
}

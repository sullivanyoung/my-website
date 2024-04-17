import { SpotifyItem } from '~/constants/types';

type albumImages = {
  height: number;
  url: string;
  width: number;
};

type artists = {
  name: string;
};

const SPOTIFY_PROFILE_URL = 'https://open.spotify.com/user/sullivanyoung';

const getAlbumImages = (images: albumImages[]): string[] => {
  const ret: string[] = [];
  images.forEach((image) => ret.push(image.url));
  return ret;
};

const getArtistNames = (artists: artists[]): string[] => {
  const ret: string[] = [];
  artists.forEach((artist) => ret.push(artist.name));
  return ret;
};

export const mapRecentSpotifyItem = (items: any): SpotifyItem => {
  const { track } = items[0];
  const { album, artists, external_urls, name } = track;

  return {
    albumImages: getAlbumImages(album?.images),
    artists: getArtistNames(artists),
    externalUrl: external_urls?.spotify,
    name: name,
    profileUrl: SPOTIFY_PROFILE_URL,
  };
};

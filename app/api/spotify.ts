import { SpotifyItem } from '~/constants/types';
import { mapRecentSpotifyItem } from '../helpers/mapper';
import { CLIENT_ID, CLIENT_SECRET, REFRESH_TOKEN } from '~/constants/env';

export async function getAccessToken(): Promise<string> {
  try {
    const authReq = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        Authorization: 'Basic ' + Buffer.from(CLIENT_ID + ':' + CLIENT_SECRET).toString('base64'),
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token: REFRESH_TOKEN!,
      }),
    });

    const { access_token }: { access_token: string } = await authReq.json();

    return access_token;
  } catch (err) {
    console.log(err);
    throw Error('Failed to get authorization for Spotify');
  }
}

export async function getRecentlyPlayedSpotifySong(): Promise<SpotifyItem> {
  try {
    const accessToken = await getAccessToken();

    const res = await fetch('https://api.spotify.com/v1/me/player/recently-played?limit=1', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
    });

    const body = await res.json();

    const { items } = body;

    return mapRecentSpotifyItem(items);
  } catch (err) {
    console.log(err);
    throw Error('Failed to get recently played song from Spotify');
  }
}

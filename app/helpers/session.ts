import { createCookieSessionStorage } from '@remix-run/node';

type SessionData = {
  emailSubmitted: string;
};

type SessionFlashData = {
  error: string;
};

export const { getSession, commitSession, destroySession } = createCookieSessionStorage<
  SessionData,
  SessionFlashData
>({
  cookie: {
    name: '__session',
    secrets: ['s3cret1'],
    maxAge: 60,
  },
});

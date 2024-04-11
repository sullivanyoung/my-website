/* eslint-disable react/function-component-definition */
import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => [
  { title: 'New Remix App' },
  { name: 'description', content: 'Welcome to Remix!' },
];

export default function Index() {
  return <p>This is the home page</p>;
}

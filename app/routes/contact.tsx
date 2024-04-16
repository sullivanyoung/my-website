import { Form, useLoaderData } from '@remix-run/react';
import { ActionFunctionArgs, LoaderFunctionArgs, json, redirect } from '@remix-run/node';
import sendEmail from '~/api/email';
import { commitSession, getSession } from '~/helpers/session';
import { StatusMessage } from '~/components/statusMessage';
import { Status } from '~/constants/enums';

export async function action({ request }: ActionFunctionArgs) {
  const form = await request.formData();
  const session = await getSession(request.headers.get('Cookie'));

  const isSuccess = await sendEmail(form);

  if (!isSuccess) {
    session.flash('error', 'Email failed to send');

    return redirect('/contact', {
      headers: {
        'Set-Cookie': await commitSession(session),
      },
    });
  }

  session.set('emailSubmitted', isSuccess.toString());

  return redirect('/contact', {
    headers: {
      'Set-Cookie': await commitSession(session),
    },
  });
}

export async function loader({ request }: LoaderFunctionArgs) {
  const session = await getSession(request.headers.get('Cookie'));

  return json(
    {
      submitted: Boolean(session.get('emailSubmitted')),
      error: Boolean(session.get('error')),
    },
    {
      headers: {
        'Set-Cookie': await commitSession(session),
      },
    },
  );
}

export default function Contact() {
  const { submitted, error } = useLoaderData<typeof loader>();

  return (
    <>
      {!submitted && !error && (
        <Form method="post" className="w-full justify-center p-4">
          <div className="flex flex-wrap md:flex-row md:flex-nowrap">
            <div className=" flex flex-col w-full m-4 md:w-1/2">
              <label className="text-white font-bold" htmlFor="fname">
                First Name
              </label>
              <input
                className="p-2 rounded-lg focus:outline-none"
                type="text"
                id="fname"
                name="fname"
                required
              />
            </div>
            <div className="flex flex-col w-full md:w-1/2 m-4">
              <label className="text-white font-bold" htmlFor="lname">
                Last Name
              </label>
              <input
                className="p-2 rounded-lg focus:outline-none"
                type="text"
                id="lname"
                name="lname"
              />
            </div>
          </div>
          <div className="flex flex-col m-4">
            <label className="text-white font-bold" htmlFor="email">
              Email
            </label>
            <input
              className="p-2 rounded-lg focus:outline-none"
              type="email"
              id="email"
              name="email"
              required
            />
          </div>
          <div className="flex flex-col m-4">
            <label className="text-white font-bold" htmlFor="fname">
              Message
            </label>
            <textarea
              className="p-2 h-40 rounded-lg align-text-top focus:outline-none"
              id="message"
              name="message"
            />
          </div>
          <div className="w-full flex justify-center md:justify-end">
            <button
              type="submit"
              className={`m-4 font-bold text-white ${
                submitted ? 'bg-gray-400' : 'bg-blue-900'
              } rounded-lg p-2`}
            >
              Submit
            </button>
          </div>
        </Form>
      )}
      {(submitted || error) && <StatusMessage status={error ? Status.Failure : Status.Success} />}
    </>
  );
}

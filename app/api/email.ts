import {
  EMAILJS_ACCESS_TOKEN,
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
  EMAILJS_USER_ID,
} from '~/constants/env';

export default async function sendEmail(form: FormData) {
  try {
    const body = {
      service_id: EMAILJS_SERVICE_ID,
      template_id: EMAILJS_TEMPLATE_ID,
      user_id: EMAILJS_USER_ID,
      accessToken: EMAILJS_ACCESS_TOKEN,
      template_params: {
        first_name: form.get('fname'),
        last_name: form.get('lname'),
        email: form.get('email'),
        message: form.get('message'),
      },
    };

    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    return !response.ok ? false : true;
  } catch (e) {
    console.log(e);
    return false;
  }
}

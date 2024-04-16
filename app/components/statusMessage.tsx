import { Status } from '~/constants/enums';

interface StatusMessageProps {
  status: Status;
}

export const StatusMessage = ({ status }: StatusMessageProps) => {
  let title;
  let titleColor;
  let message;
  let subMessage;
  let bgColor;

  switch (status) {
    case Status.Success:
      title = 'Success';
      titleColor = 'text-green-900';
      message = 'Thanks for emailing me! I will get back to you as soon as I can.';
      bgColor = 'bg-green-200 border-green-900';
      break;
    default:
      title = 'Sorry...';
      titleColor = 'text-red-900';
      message = 'Something went wrong, please try again later or email me directly at';
      subMessage = <strong>sullivangyoung@gmail.com</strong>;
      bgColor = 'bg-red-200 border-red-500';
  }

  return (
    <div className={`rounded-lg border border-1 ${bgColor} p-4 mt-8 mx-8`}>
      <h4 className={`font-bold mb-2 ${titleColor}`}>{title}</h4>
      {message} {subMessage}
    </div>
  );
};

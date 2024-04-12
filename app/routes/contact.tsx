export default function Contact() {
  const handleSubmit = () => {
    // TODO: update handle submit
    // eslint-disable-next-line no-alert
    alert(
      'Thanks for submitting the contact form. Unfortunately, I have not wired it up just yet. Please email me directly at sullivangyoung@gmail.com.',
    );
  };

  return (
    <form onSubmit={handleSubmit} className="w-full justify-center p-4">
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
        <input className="p-2 rounded-lg focus:outline-none" type="text" id="email" name="email" />
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
        <button className="m-4 font-bold text-white bg-blue-900 rounded-lg p-2">Submit</button>
      </div>
    </form>
  );
}

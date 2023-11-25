"use client";
import React, { FormEvent, useState} from "react";

const ContactSection = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const resetForm = (
    email: HTMLFormElement,
    subject: HTMLFormElement,
    message: HTMLFormElement
  ) => {
    email.value = "";
    subject.value = "";
    message.value = "";
    setIsLoading(false);
  };

  const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { email, subject, message } = event.currentTarget;
    setFormSubmitted(true);
    resetForm(email, subject, message);
  };

  return (
    <section className="grid md:grid-cols-2 my-12 py-24 gap-4 relative">
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div>
        <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
        <p className="text-[#adb7be] mb-8 max-w-md">
          I'm currently looking for new opportunities, my inbox is always open.
          Whether you have a question or just want to say hi, I'll try my best
          to get back to you!
        </p>
      </div>
      <div>
        <form className="flex flex-col" onSubmit={handleFormSubmit}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block text-sm font-medium mb-2"
            >
              Your email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              required
              placeholder="bhupinder.jogi@gmail.com"
              className="bg-[#18191e] border border-[#33353f] focus:border-white text-gray-100 text-sm rounded-lg w-full p-2.5"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block text-sm font-medium mb-2"
            >
              Subject
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              required
              placeholder="Just saying hi"
              className="bg-[#18191e] border border-[#33353f] focus:border-white text-gray-100 text-sm rounded-lg w-full p-2.5"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm font-medium mb-2"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="Let's talk about..."
              className="bg-[#18191e] border border-[#33353f] focus:border-white text-gray-100 text-sm rounded-lg w-full p-2.5"
            />
          </div>
          <button
            onClick={() => setIsLoading(true)}
            type="submit"
            className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Send Message
          </button>
          {formSubmitted ? (
            <p className="flex flex-row text-green-500 text-sm mt-4 justify-center">
              Email sent successfully!
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
};

export default ContactSection;

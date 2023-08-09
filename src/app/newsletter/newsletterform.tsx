
import axios from "axios";
import React, { useState } from "react";
import { RiLoader5Fill } from "react-icons/ri";

function NewsletterForm() {
  const [mail, setMail] = useState<any | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<boolean>();
  const [subscriberMessage, setSubscriberMessage] = useState("");

  const subscribeForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    axios
      .put("/api/mailingList", {
        mail: mail,
      })
      .then((res) => {
        if (res.status === 200) {
          setLoading(false);
          setSuccess(true);
          setSubscriberMessage(res.data.message);
        } else {
          setLoading(false);
          setSubscriberMessage(res.data.message);
          // Reset form fields
          setMail("");
          return;
        }
      })
      .catch((err) => {
        setLoading(false);
        setSubscriberMessage(String(err.message));
        // Reset form fields
        setMail("");
      });
  };

  return (
    <section className="container mx-auto my-10 max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid items-center gap-10 bg-teal-400 py-[15%] px-[6%] dark:bg-teal-500 md:p-[6%] lg:grid-cols-2">
        <div>
          <h3 className="text-5xl font-semibold text-white">
            Join Our Newsletter
          </h3>
          <p className="mt-5 text-lg text-gray-600 font-semibold text-justify">
            Ready to embark on your projects with us ? Contact today to discuss your requirements. Visit our website for more information and to get in touch with our team. 
          </p>
        </div>

        <form onSubmit={subscribeForm}>
          <div className="gap-3 md:flex">
            <input
              type="email"
              className="peer text-gray-200 w-full rounded border-gray-300 bg-gray-200 py-3 pl-7 pr-12 text-gray-700 focus:border-white focus:ring-white peer-invalid:text-pink-600 dark:border-zinc-500 dark:bg-zinc-900 dark:focus:ring-white sm:text-sm"
              placeholder="Please enter your email"
              autoComplete="email"
              required
              onChange={(e) => setMail(e.target.value)}
            />

            <button
              disabled={loading}
              type="submit"
              className="mt-5 w-full font-semibold rounded bg-white py-3 px-5 text-gray-500 hover:bg-gray-200 disabled:cursor-not-allowed disabled:bg-opacity-60 md:mt-0 md:w-auto"
            >
              {!loading ? (
                "SUBSCRIBE"
              ) : (
                <div className="flex w-full items-center justify-center ">
                  <RiLoader5Fill className="w-8 animate-spin" /> 
                </div>
              )}
            </button>
          </div>

          {success ? (
            <p className="mt-2 text-gray-800 dark:text-gray-800">
              {subscriberMessage}
            </p>
          ) : (
            <p className="mt-2 text-gray-800 dark:text-gray-800">
              {subscriberMessage}
            </p>
          )}
        </form>
      </div>
    </section>
  )
};

export default  NewsletterForm;
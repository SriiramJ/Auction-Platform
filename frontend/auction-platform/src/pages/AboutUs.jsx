import { useState } from "react";

export default function AboutUs() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setMessage("Thank you for subscribing to our newsletter!");
      setEmail("");
    } else {
      setMessage("Please enter a valid email address.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-bold text-blue-600 text-center mb-6">
        About Us
      </h1>
      <p className="text-gray-700 text-lg text-center">
        Welcome to Auction Platform, your trusted destination for buying and
        selling unique items. Our mission is to provide a seamless and secure
        auction experience for everyone. Whether you are a seller looking to
        reach a wider audience or a buyer searching for exclusive deals, we are
        here to make it happen.
      </p>
      <div className="mt-10 bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center text-blue-600 mb-4">
          Join Our Newsletter
        </h2>
        <p className="text-gray-600 text-center mb-4">
          Subscribe to get the latest updates on new auctions, special offers,
          and more!
        </p>
        <form onSubmit={handleSubscribe} className="flex flex-col items-center">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full md:w-2/3 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="mt-4 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            Subscribe
          </button>
        </form>
        {message && (
          <p className="text-center text-green-600 mt-4">{message}</p>
        )}
      </div>
    </div>
  );
}

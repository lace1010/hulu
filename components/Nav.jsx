import React from "react";
import requests from "../utils/requests";
import { useRouter } from "next/router";
const Nav = () => {
  const router = useRouter();
  return (
    <nav className="relative">
      <div className="flex px-10 sm:px-15 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide">
        {/* loop through requests, then destructure array to key and then object of title and url to display for nav */}
        {Object.entries(requests).map(([key, { title, url }]) => (
          <h2
            // key is the name of the object in requests such as "fetchActionMovies"
            key={key}
            onClick={() => router.push(`/?genre=${key}`)}
            className="last:pr-10 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white"
          >
            {title}
          </h2>
        ))}
      </div>

      {/* add this for fade effect */}
      <div className="absolute top-0 right-0 z-10 bg-gradient-to-l from-[#06202A] h-10 w-1/12" />
    </nav>
  );
};

export default Nav;

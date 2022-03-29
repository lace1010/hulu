import { useRouter } from "next/router";
import React from "react";

const HeaderItem = ({ title, Icon, clicked }) => {
  const router = useRouter();

  return (
    <div
      onClick={() => (clicked ? router.push("/") : null)}
      className="group flex flex-col items-center w-12 sm:w-20 cursor-pointer hover:text-white "
    >
      <Icon className="h-8 mb-1 group-hover:animate-bounce" />
      <p className="tracking-widest opacity-0 group-hover:opacity-100">
        {title}
      </p>
    </div>
  );
};

export default HeaderItem;

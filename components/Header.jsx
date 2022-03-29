import Image from "next/image";
import React from "react";
import HeaderItem from "./HeaderItem";
import {
  HomeIcon,
  BadgeCheckIcon,
  CollectionIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center m-5 h-auto">
      <div className="flex flex-grow justify-evenly items-center max-w-2xl">
        <HeaderItem title="Home" Icon={HomeIcon} clicked={true} />
        <HeaderItem title="Trending" Icon={LightningBoltIcon} />
        <HeaderItem title="Verified" Icon={BadgeCheckIcon} />
        <HeaderItem title="Collection" Icon={CollectionIcon} />
        <HeaderItem title="Search" Icon={SearchIcon} />
        <HeaderItem title="Account" Icon={UserIcon} />
      </div>

      <Image
        className="object-contain"
        src="https://links.papareact.com/ua6"
        alt="hulu logo"
        width={200}
        height={100}
      />
    </div>
  );
};

export default Header;

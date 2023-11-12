import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { VscBellDot } from "react-icons/vsc";
import { AiOutlineSearch } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";

import Image from "next/image";
import gytis from "../../../public/images/gytis.png";

const TopBar: any = () => {
  return (
    <div className="w-full flex items-center justify-between px-4 lg:px-10 py-2 border-b border-gray-100">
      <div className="flex items-center text-gray-300">
        <GiHamburgerMenu className="block lg:hidden text-gray-300 mr-5" />

        <div className="flex items-center text-gray-300 border border-gray-200 bg-gray-50 rounded p-2">
          <div className="hidden lg:flex text-xs pr-48">Search</div>
          <AiOutlineSearch />
        </div>
      </div>
      <div className="flex items-center text-gray-500 gap-6 ">
        <div>
          <VscBellDot />
        </div>
        <div>
          <IoChatboxEllipsesOutline />
        </div>
        <div className="flex items-center text-xs font-semibold text-black">
          <Image
            src={gytis}
            width={35}
            height={35}
            alt="profile"
            className="mr-2 rounded-full"
          />
          <div className="hidden lg:flex">Gytis Leonavicius</div>
          <div className="text-gray-500 pl-2">
            <MdKeyboardArrowDown />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;

import { BiSolidDashboard } from "react-icons/bi";
import { MdPersonSearch } from "react-icons/md";
import { FaPeopleGroup, FaHeadphonesSimple } from "react-icons/fa6";
import { PiCirclesThreeBold } from "react-icons/pi";
import { IoSettingsSharp } from "react-icons/io5";
import { BsCalendar3 } from "react-icons/bs";

const NavMenu: any = () => {
  return (
    <div className="w-full bg-gray-50 rounded-l-3xl border-r border-gray-200 px-4 lg:px-6">
      <div className="flex flex-col gap-10 justify-between lg:h-5/6 text-gray-400">
        <div>
          <h1 className="flex justify-center text-2xl text-black font-bold py-10">
            WeHR
          </h1>
          <div className="flex flex-col gap-6 items-center lg:items-start mb-10">
            <h2 className="text-xs text-gray-300">MAIN MENU</h2>
            <div className="flex">
              <BiSolidDashboard className="text-[#FF5151] mt-1 mr-4" />
              <div className="hidden lg:flex">Dashboard</div>
            </div>
            <div className="flex">
              <MdPersonSearch className="mt-1 mr-4 color-red" />
              <div className="hidden lg:flex">Recruitment</div>
            </div>
            <div className="flex">
              <BsCalendar3 className="mt-1 mr-4" />
              <div className="hidden lg:flex">Schedule</div>
            </div>
            <div className="flex">
              <FaPeopleGroup className="mt-1 mr-4" />
              <div className="hidden lg:flex"> Employee</div>
            </div>
            <div className="flex">
              <PiCirclesThreeBold className="mt-1 mr-4" />
              <div className="hidden lg:flex">Department</div>
            </div>
          </div>
          <div className="flex flex-col gap-6 items-center lg:items-start">
            <h2 className="text-xs text-gray-300">OTHER</h2>
            <div className="flex">
              <FaHeadphonesSimple className="mt-1 mr-4" />
              <div className="hidden lg:flex">Support</div>
            </div>
            <div className="flex">
              <IoSettingsSharp className="mt-1 mr-4" />
              <div className="hidden lg:flex">Settings</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavMenu;

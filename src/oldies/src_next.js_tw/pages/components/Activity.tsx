const Actiity: any = () => {
  return (
    <div className="rounded-lg font-medium bg-[#121843] text-white">
      <div className="rounded-t-lg bg-[#1B204A] py-2 px-6">Recent Activity</div>
      <div className="p-6">
        <div className="text-[10px] text-gray-400">
          10.40 AM, Fri 10 Sept 2023
        </div>
        <div className="text-lg py-2">You Posted a New Job</div>
        <div className="text-xs text-gray-400">
          Kindly check the requirement and terms of work and make sure
          everything is right.
        </div>
        <div className="text-xs flex items-center justify-between pt-8">
          <div className="whitespace-pr w-1/2">
            You made 12 Activities today
          </div>
          <div className="rounded bg-[#FF5151] text-white py-2 px-4">
            All Actiities
          </div>
        </div>
      </div>
    </div>
  );
};

export default Actiity;

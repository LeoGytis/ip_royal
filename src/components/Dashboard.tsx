import DashStats from "./DashStats";
import Announcment from "./Announcment";
import Activity from "./Activity";
import Upcoming from "./Upcoming";

const Dashboard: any = () => {
  return (
    <div className="h-full p-6 px-4 lg:px-10">
      <div className="text-xl font-medium pb-4">Dashboard</div>
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="flex flex-col gap-4 w-full lg:w-2/3">
          <DashStats />
          <Announcment />
        </div>
        <div className="flex flex-col lg:w-1/3 gap-4">
          <Activity />
          <Upcoming />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

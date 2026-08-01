import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import DashboardCard from "../components/DashboardCard";
import InquiryTable from "../components/InquiryTable";

import { dashboardStats } from "../data/dashboardData";

export default function AdminDashboard() {
  return (
    <div className="flex bg-gray-100 min-h-screen">

      <Sidebar />

      <div className="flex-1">

        <Topbar />

        <div className="p-8">

          <div className="grid md:grid-cols-4 gap-6">

            {dashboardStats.map((item, index) => (
              <DashboardCard
                key={index}
                title={item.title}
                value={item.value}
                icon={item.icon}
                color={item.color}
              />
            ))}

          </div>

          <InquiryTable />

        </div>

      </div>

    </div>
  );
}
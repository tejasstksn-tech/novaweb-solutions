import {
  LayoutDashboard,
  MessageSquare,
  Briefcase,
  Users,
  Settings,
} from "lucide-react";

export default function Sidebar() {
  const menu = [
    { icon: <LayoutDashboard size={20} />, text: "Dashboard" },
    { icon: <MessageSquare size={20} />, text: "Inquiries" },
    { icon: <Briefcase size={20} />, text: "Projects" },
    { icon: <Users size={20} />, text: "Customers" },
    { icon: <Settings size={20} />, text: "Settings" },
  ];

  return (
    <div className="w-64 bg-slate-900 text-white min-h-screen p-6">
      <h1 className="text-2xl font-bold mb-10">
        NovaWeb Admin
      </h1>

      <div className="space-y-3">
        {menu.map((item, index) => (
          <button
            key={index}
            className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-slate-700 transition"
          >
            {item.icon}
            {item.text}
          </button>
        ))}
      </div>
    </div>
  );
}
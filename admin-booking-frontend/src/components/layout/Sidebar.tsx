import { NavLink } from "react-router-dom";
import { LayoutDashboard, Map, Book, Users, UserCog, Settings, Bus } from 'lucide-react';

// -----------------------------------------------------------
// 1. HÀM TRỢ GIÚP: getIcon
// Chứa mã SVG cho các icon
// -----------------------------------------------------------
const getLucideIcon = (name) => {
  switch (name) {
    case "Dashboard":
      return <LayoutDashboard className="h-5 w-5" />;
    case "Bus Routes":
      return <Map className="h-5 w-5" />;
    case "Bookings":
      return <Book className="h-5 w-5" />;
    case "Users":
      return <Users className="h-5 w-5" />;
    case "Drivers":
      return <UserCog className="h-5 w-5" />; 
    case "Settings":
      return <Settings className="h-5 w-5" />;
    default:
      return null;
  }
};

// -----------------------------------------------------------
// 2. COMPONENT: Sidebar
// -----------------------------------------------------------
export default function Sidebar() {
  const menus = [
    { name: "Dashboard", path: "/" },
    { name: "Bus Routes", path: "/routes" },
    { name: "Bookings", path: "/bookings" },
    { name: "Users", path: "/users" },
    { name: "Drivers", path: "/drivers" },
    { name: "Settings", path: "/settings" },
  ];

  return (
    <aside className="w-56 bg-white border-r p-5 space-y-4">
      <h1 className="text-xl font-bold text-blue-600 flex items-center space-x-2 pb-2">
        <Bus className="h-6 w-6" />
        <span>BusAdmin</span>
      </h1>

      <nav className="flex flex-col space-y-2">
        {menus.map((m) => (
          <NavLink
            key={m.path}
            to={m.path}
            className={({ isActive }) =>

              `px-4 py-2 rounded-md hover:bg-blue-50 flex items-center space-x-3 transition-colors ${ 
                isActive 
                  ? "bg-blue-100 text-blue-600 font-semibold" 
                  : "text-gray-600"
              }`
            }
          >

            <span className="text-xl">
              {getLucideIcon(m.name)} 
            </span>

            <span>{m.name}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <nav className="flex gap-6 mb-8 text-xl font-semibold">
        <Link to="/">🏠 Home</Link>
        <Link to="/zone/1">🗺️ Zone</Link>
        <Link to="/book">📖 Book</Link>
        <Link to="/practice">🧪 Practice</Link>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

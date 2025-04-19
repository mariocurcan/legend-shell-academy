import { Link, Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Layout() {
  const { i18n } = useTranslation();

  const changeLanguage = (lang: "en" | "es") => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <nav className="flex flex-wrap items-center justify-between gap-6 mb-8 text-xl font-semibold">
        <div className="flex gap-6">
          <Link to="/">🏠 Home</Link>
          <Link to="/zone/1">🗺️ Zone</Link>
          <Link to="/book">📖 Book</Link>
          <Link to="/practice">🧪 Practice</Link>
        </div>
        <div className="text-sm flex items-center gap-2">
          🌐
          <button
            onClick={() => changeLanguage("en")}
            className="hover:underline"
          >
            EN
          </button>
          |
          <button
            onClick={() => changeLanguage("es")}
            className="hover:underline"
          >
            ES
          </button>
        </div>
      </nav>

      <main>
        <Outlet />
      </main>
    </div>
  );
}

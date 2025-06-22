import { Link, useLocation } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Navigation = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-primary text-primary-foreground shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            to="/"
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
          >
            <div className="relative">
              <Icon
                name="Flame"
                size={24}
                className="text-library-gold candle-glow"
              />
              <Icon
                name="Feather"
                size={16}
                className="absolute -top-1 -right-1 text-library-gold"
              />
            </div>
            <span className="text-xl font-bold font-serif">
              DUSKWOOD LIBRARY
            </span>
          </Link>

          <div className="flex space-x-8">
            <Link
              to="/"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive("/")
                  ? "bg-secondary text-secondary-foreground"
                  : "hover:bg-primary/80"
              }`}
            >
              Главная
            </Link>
            <Link
              to="/catalog"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive("/catalog")
                  ? "bg-secondary text-secondary-foreground"
                  : "hover:bg-primary/80"
              }`}
            >
              Каталог
            </Link>
            <Link
              to="/search"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive("/search")
                  ? "bg-secondary text-secondary-foreground"
                  : "hover:bg-primary/80"
              }`}
            >
              Поиск
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

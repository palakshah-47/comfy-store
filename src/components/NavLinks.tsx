import { useAppSelector } from "@/hooks";
import { links } from "@/utils";
import { NavLink } from "react-router-dom";

const RESTRICTED_ROUTES = ["checkout", "orders"];

const NavLinks = () => {
  const user = useAppSelector((state) => state.userState.user);
  return (
    <div className="hidden lg:flex justify-center items-center gap-x-4">
      {links.map((link) => {
        const isRestictedRoutes = RESTRICTED_ROUTES.includes(link.href);
        if (isRestictedRoutes && !user) return null;
        return (
          <NavLink
            to={link.href}
            key={link.label}
            className={({ isActive }) => {
              return `capitalize from-neutral-400 tracking-wide ${
                isActive ? "text-primary" : ""
              }`;
            }}
          >
            {link.label}
          </NavLink>
        );
      })}
    </div>
  );
};

export default NavLinks;

import { LinksDropdown, Logo, NavLinks } from ".";

const Navbar = () => {
  return (
    <nav className="sm:bg-muted sm:py-4">
      <div className="sm:align-middle align-middle flex sm:flex sm:justify-between justify-between items-center sm:items-center">
        <Logo />
        <LinksDropdown />
        <NavLinks />
      </div>
    </nav>
  );
};

export default Navbar;

import { CartButton, LinksDropdown, Logo, ModelToggle, NavLinks } from ".";

const Navbar = () => {
  return (
    <nav className="bg-muted px-20 py-4">
      <div className="align-middle flex justify-between items-center">
        <Logo />
        <LinksDropdown />
        <NavLinks />
        <div className="flex justify-center items-center gap-x-4">
          <ModelToggle />
          <CartButton />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

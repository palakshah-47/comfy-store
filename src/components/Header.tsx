import { useState } from "react";
import { Button } from "./ui/button";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  //temp
  const [user, setUser] = useState<{ username: string } | null>({
    username: "demo user"
  });

  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    navigate("/");
  };
  return (
    <header>
      <div className="align-element flex justify-center sm:justify-end py-2"></div>
      {user ? (
        <div className="flex gap-x-2 sm:gap-x-8 items-center justify-end">
          <p className="text-xs sm:test-sm">Hello, {user.username}</p>
          <Button variant="link" size="sm" onClick={handleLogout}>
            Logout
          </Button>
        </div>
      ) : (
        <div className="flex gap-x-6 justify-end items-center -mr-4">
          <Button asChild variant="link" size="sm">
            <Link to="/login">Sign in / Guest</Link>
          </Button>
          <Button asChild variant="link" size="sm">
            <Link to="/register">Register</Link>
          </Button>
        </div>
      )}
    </header>
  );
}

export default Header;

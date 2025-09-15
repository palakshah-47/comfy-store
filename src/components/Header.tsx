import { Button } from "./ui/Button";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { logoutUser } from "@/slices/user/userSlice";
import { clearCart } from "@/slices/cart/cartSlice";
import toast from "react-hot-toast";

function Header() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const user = useAppSelector((state) => state.userState.user);
  const handleLogout = () => {
    dispatch(clearCart());
    dispatch(logoutUser());
    toast("Logged Out");
    navigate("/");
  };
  return (
    <header>
      <div className="align-middle flex justify-center sm:justify-end py-2"></div>
      {user ? (
        <div className="flex gap-x-2 sm:gap-x-8 items-center justify-end px-40">
          <p className="text-xs sm:test-sm">Hello, {user.username}</p>
          <Button variant="link" size="sm" onClick={handleLogout}>
            Logout
          </Button>
        </div>
      ) : (
        <div className="flex gap-x-6 justify-end items-center px-40">
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

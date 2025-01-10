import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";

const CartButton = () => {
  const numItemsCart = 5;

  return (
    <Button
      asChild
      variant="outline"
      size="icon"
      className="flex justify-center items-center relative"
    >
      <Link to="/cart">
        <ShoppingCart />
        <span
          className="absolute -top-2 -right-3 bg-primary text-white 
      rounded-full h-6 w-6 flex items-center justify-center text-xs"
        >
          {numItemsCart}
        </span>
      </Link>
    </Button>
  );
};

export default CartButton;

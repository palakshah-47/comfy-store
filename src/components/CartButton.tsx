import { Link } from "react-router-dom";
import { Button } from "./ui/Button";
import { ShoppingCart } from "lucide-react";
import { useAppSelector } from "@/hooks";

const CartButton = () => {
  const numItemsCart = useAppSelector(
    (state) => state.cartState.numItemsInCart
  );

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

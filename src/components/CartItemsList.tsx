import { useAppSelector } from "@/hooks";
import { Card } from "./ui/Card";
import {
  FirstColumn,
  SecondColumn,
  ThirdColumn,
  FourthColumn
} from "./CartItemColumns";

export default function CartItemsList() {
  const cartItems = useAppSelector((state) => state.cartState.cartItems);

  return (
    <div>
      {cartItems.map((catItem) => {
        const { cartID, title, price, image, amount, company, productColor } =
          catItem;
        return (
          <Card
            key={cartID}
            className="flex flex-col gap-y-4 sm:flex-row flex-wrap p-6 mb-8"
          >
            <FirstColumn image={image} title={title} />
            <SecondColumn
              title={title}
              company={company}
              productColor={productColor}
            />
            <ThirdColumn amount={amount} cartID={cartID} />
            <FourthColumn price={price} />
          </Card>
        );
      })}
    </div>
  );
}

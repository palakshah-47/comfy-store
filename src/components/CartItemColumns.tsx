import { formatAsDollars } from "@/utils";
import { useAppDispatch } from "@/hooks";
import { Button } from "./ui/Button";
import { editItem, removeItem } from "@/slices/cart/cartSlice";
import SelectProductAmount from "./SelectProductAmount";
import { Mode } from "./SelectProductAmount";

export const FirstColumn = ({
  title,
  image
}: {
  title: string;
  image: string;
}) => {
  return (
    <img
      src={image}
      alt={title}
      className="h-24 w-24 rounded-lg sm:h-32 sm:w-32 object-cover"
    />
  );
};

export const SecondColumn = ({
  title,
  company,
  productColor
}: {
  title: string;
  company: string;
  productColor: string;
}) => {
  return (
    <div className="sm:ml-4 md:ml-12 sm:w-48">
      <h3 className="capitalize font-medium">{title}</h3>
      <h4 className="mt-2 capitalize text-sm">{company}</h4>
      <p className="mt-2 text-sm capitalizeflex items-center gap-x-2">
        Color:{" "}
        <span
          // className={`w-[15px] h-[15px] rounded-[50%] bg-[${productColor}] `}
          style={{
            width: "15px",
            height: "15px",
            borderRadius: "50%",
            background: productColor
          }}
        ></span>
      </p>
    </div>
  );
};

export const ThirdColumn = () => {
  return <h4>Third Column</h4>;
};

export const FourthColumn = () => {
  return <h4>Fourth Column</h4>;
};

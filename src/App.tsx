import { Button } from "@/components/ui/button";
import { useAppSelector } from "./hooks";
import {
  HomeLayout,
  Landing,
  Error,
  Products,
  Cart,
  SingleProduct,
  About,
  Register,
  Login,
  Checkout,
  Orders
} from "./pages";
function App() {
  const { name } = useAppSelector((state) => state.userState);
  console.log("user" + name);
  return (
    <div>
      <h1 className="text-7xl font-bold"></h1>
      <Button
        variant={"destructive"}
        size="lg"
        onClick={() => console.log("IT WORKED!!")}
      >
        Click Me
      </Button>
      <Cart></Cart>
    </div>
  );
}
export default App;

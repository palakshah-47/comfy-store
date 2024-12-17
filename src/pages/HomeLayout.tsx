import { Header } from "@/components";
import { Outlet } from "react-router-dom";

function HomeLayout() {
  return (
    <>
      <Header></Header>
      <nav>navbar</nav>
      <div className="aling-element py-20">
        <Outlet />
      </div>
    </>
  );
}
export default HomeLayout;

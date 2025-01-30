import { Header, Navbar } from "@/components";
import { Outlet } from "react-router-dom";

function HomeLayout() {
  return (
    <>
      <Header></Header>

      <Navbar />
      <div className="items-center align-middle px-40 py-20">
        <Outlet />
      </div>
    </>
  );
}
export default HomeLayout;

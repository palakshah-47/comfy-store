import { Header, Loading, Navbar } from "@/components";
import { Outlet, useNavigation } from "react-router-dom";

function HomeLayout() {
  const navigate = useNavigation();
  const isPageLoading = navigate.state === "loading";
  return (
    <>
      <Header></Header>

      <Navbar />
      <div className="items-center align-middle px-40 py-20">
        {isPageLoading ? <Loading /> : <Outlet />}
      </div>
    </>
  );
}
export default HomeLayout;

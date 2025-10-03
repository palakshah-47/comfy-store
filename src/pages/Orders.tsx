import { ReduxStore } from "@/store";
import { customFetch, OrdersResponse } from "@/utils";
import toast from "react-hot-toast";
import { LoaderFunction, redirect, useLoaderData } from "react-router-dom";
import { Pagination } from "../utils/types";
import {
  ComplexPaginationContainer,
  OrdersList,
  SectionTitle
} from "@/components";

export const loader =
  (store: ReduxStore): LoaderFunction =>
  async ({ request }): Promise<OrdersResponse | Response | null> => {
    const user = store.getState().userState.user;
    if (!user) {
      toast.error("Please login to continue");
      return redirect("/login");
    }
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries()
    ]);
    try {
      const response = await customFetch.get<OrdersResponse>("/orders", {
        params,
        headers: { Authorization: `Bearer ${user.jwt}` }
      });
      return { ...response.data };
    } catch (error) {
      console.log(error);
      toast.error("Failed to fetch orders");
      return null;
    }
  };

function Orders() {
  const { meta } = useLoaderData() as OrdersResponse;
  if (meta.pagination.total >= 1)
    return (
      <>
        <SectionTitle text="Your Orders" />
        <OrdersList />
        <ComplexPaginationContainer />
      </>
    );
}
export default Orders;

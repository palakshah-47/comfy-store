import { Filters, ProductsContainer, PaginationContainer } from "@/components";
import { customFetch, type ProductsResponse } from "../utils";
import { LoaderFunction } from "react-router-dom";

const url = "/products";

export const loader: LoaderFunction = async (): Promise<ProductsResponse> => {
  const response = await customFetch<ProductsResponse>(url);
  return { ...response.data };
};
function Products() {
  return (
    <>
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </>
  );
}
export default Products;

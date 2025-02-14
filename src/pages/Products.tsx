import { Filters, ProductsContainer, PaginationContainer } from "@/components";
import { customFetch, type ProductsResponse, type ProductResponseWithParams } from "../utils";
import { LoaderFunction } from "react-router-dom";

const url = "/products";

export const loader: LoaderFunction = async ({
  request
}): Promise<ProductResponseWithParams> => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries()
  ]);
  
  const response = await customFetch<ProductsResponse>(url, {
    params
  });
  return { ...response.data, params };
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

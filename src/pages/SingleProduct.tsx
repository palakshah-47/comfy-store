import { customFetch, SingleProductResponse } from "@/utils";
import { LoaderFunction, useLoaderData } from "react-router-dom";

export const loader: LoaderFunction = async ({
  params
}): Promise<SingleProductResponse> => {
  const response = await customFetch<SingleProductResponse>(
    `/products/${params.id}`
  );
  return { ...response.data };
};
const SingleProduct = () => {
  const { data: product } = useLoaderData() as SingleProductResponse;
  console.log(product);
  return <h1 className="text-4xl">SingleProduct Page</h1>;
};
export default SingleProduct;

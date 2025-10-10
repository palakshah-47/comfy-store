import { useLoaderData } from "react-router-dom";
import { type OrdersResponse } from "@/utils";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/Table";

function OrdersList() {
  const { data: orders, meta } = useLoaderData() as OrdersResponse;

  return (
    <div className="mt-16">
      <h4 className="mb-4 capitalize font-bold">
        total orders : {meta.pagination.total}
      </h4>
      <Table>
        <TableCaption>A list of your recent orders.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Address</TableHead>
            <TableHead className="w-[100px]">Products</TableHead>
            <TableHead className="w-[100px]">Cost</TableHead>
            <TableHead>Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order) => {
            const { name, address, numItemsInCart, orderTotal, createdAt } =
              order.attributes;
            return (
              <TableRow key={order.id}>
                <TableCell className="font-semibold">{name}</TableCell>
                <TableCell className="font-semibold">{address}</TableCell>
                <TableCell className="text-center font-semibold">{numItemsInCart}</TableCell>
                <TableCell className="font-semibold">{orderTotal}</TableCell>
                <TableCell className="font-semibold">{new Date(createdAt).toDateString()}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
export default OrdersList;

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from "./ui/PaginationContent";
import {
  type OrdersResponse,
  constrcutUrl,
  constructPrevOrNextUrl
} from "@/utils";
import { useLocation, useLoaderData } from "react-router-dom";

const ComplexPaginationContainer = () => {
  const { meta } = useLoaderData() as OrdersResponse;
  const { pageCount, page } = meta.pagination;
  const { search, pathname } = useLocation();

  const pages = Array.from({ length: pageCount }, (_, index) => index + 1);

  if (pageCount < 2) return null;

  // const renderPagination = pages.map((pageNumber) => {
  //   const isActive = pageNumber === page;
  //   const url = constrcutUrl({ pageNumber, search, pathname });
  //   return (
  //     <PaginationItem key={pageNumber}>
  //       <PaginationLink to={url} isActive={isActive}>
  //         {pageNumber}
  //       </PaginationLink>
  //     </PaginationItem>
  //   );
  // });

  const constructButton = ({
    pageNumber,
    isActive
  }: {
    pageNumber: number;
    isActive: boolean;
  }): React.ReactNode => {
    const url = constrcutUrl({ pageNumber, search, pathname });
    return (
      <PaginationItem key={pageNumber}>
        <PaginationLink to={url} isActive={isActive}>
          {pageNumber}
        </PaginationLink>
      </PaginationItem>
    );
  };
  const renderPagination = () => {
    let pages: React.ReactNode[] = [];
    //first page
    pages.push(constructButton({ pageNumber: 1, isActive: page === 1 }));

    if (page !== 1 && page !== pageCount)
      pages.push(constructButton({ pageNumber: page, isActive: true }));
    //last page
    pages.push(
      constructButton({ pageNumber: pageCount, isActive: page === pageCount })
    );
    return pages;
  };
  const { prevUrl, nextUrl } = constructPrevOrNextUrl({
    currentPage: page,
    pageCount,
    search,
    pathname
  });

  return (
    <Pagination className="mt-16">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious to={prevUrl} />
        </PaginationItem>
        {renderPagination()}
        <PaginationItem>
          <PaginationNext to={nextUrl} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
export default ComplexPaginationContainer;

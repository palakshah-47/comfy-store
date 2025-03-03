type ComstructUrlParams = {
  pageNumber: number;
  search: string;
  pathname: string;
};

export const constrcutUrl = ({
  pageNumber,
  search,
  pathname
}: ComstructUrlParams): string => {
  return "/products";
};

type ConstructPrevOrNextParams = {
    currentPage: number;
    pageCount: number;
    search: string;
    pathname: string;
}

export const constructPrevOrNextUrl = ({ currentPage, pageCount, search, pathname }: ConstructPrevOrNextParams): { prevUrl: string;  nextUrl: string} => {
    const nextUrl = '/products';
    const prevUrl = '/products'
    return {prevUrl, nextUrl}
}
import ProductsGrid from "./ProductsGrid";
import SectionTitle from "./SectionTitle";

export default function FeaturedProducts() {
  return (
    <section className="pt-24">
      <SectionTitle text="featured Products" />
      <ProductsGrid />
    </section>
  );
}

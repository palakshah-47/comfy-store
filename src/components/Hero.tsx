import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import HeroCarousel from "./HeroCarousel";
export default function Hero() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
      <div>
        <h1 className="max-w-2xl font-bold text-3xl tracking-tight sm:text-6xl">
          We are changing the way people shop
          <p className="mt-8 max-w-xl text-lg leading-8 font-semibold">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam
            laudantium atque rem ipsa eligendi magni provident et veniam, quos
            temporibus nobis vel commodi fugiat dolorum cum delectus eos natus
            omnis?
          </p>
          <Button asChild size="lg" className="mt-10 text-lg">
            <Link to="/products">Our Products</Link>
          </Button>
        </h1>
      </div>
      <HeroCarousel />
    </section>
  );
}

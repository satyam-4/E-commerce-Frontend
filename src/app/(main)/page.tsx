import HeroSlider from "@/app/(main)/components/HeroSlider";
import CategoryGrid from "@/app/(main)/components/CategoryGrid";
import FeaturedProduct from "@/app/(main)/components/FeaturedProduct";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <CategoryGrid />
      <FeaturedProduct />
    </>
  );
}

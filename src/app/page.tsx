import HomePageCards from "@/components/HomePageCards";
import HomePageCarousel from "@/components/HomePageCarousel";

export default function Home() {
  return (
    <h1 className=''>
      <HomePageCarousel />
      <HomePageCards />
    </h1>
  );
}

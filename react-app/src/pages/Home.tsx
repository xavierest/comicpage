import { HomeCarousel } from "../components/HomeCarousel";
import data from "../data/data.json";

export function Home() {
  return (
    <div className="containerCarousel">
      {data.map((person) => {
        return <HomeCarousel {...person} />;
      })}
    </div>
  );
}

import { Carousel, Container } from "react-bootstrap";

type HomeCarouselProps = {
  name: string;
  img: string;
};

export function HomeCarousel({ name, img }: HomeCarouselProps) {
  return (
    <div className="card">
      <img src={img} alt={name} />
      <h2>{name}</h2>
    </div>
  );
}

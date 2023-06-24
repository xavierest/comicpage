import { Carousel, Card, Row, Col } from "react-bootstrap";

export function HomeCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <Row>
          <Col>
            <Card>
              <Card.Img
                variant="top"
                src="https://i.ytimg.com/vi/HG8tWasSL6I/maxresdefault.jpg"
              />
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img
                variant="top"
                src="https://i.ytimg.com/vi/HG8tWasSL6I/maxresdefault.jpg"
              />
              {/* <div className="card-img-overlay">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p className="card-text">Last updated 3 mins ago</p>
              </div>  */}
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img
                variant="top"
                src="https://i.ytimg.com/vi/HG8tWasSL6I/maxresdefault.jpg"
              />
            </Card>
          </Col>
        </Row>
      </Carousel.Item>
      <Carousel.Item>
        <Row>
          <Col>
            <Card>
              <Card.Img
                variant="top"
                src="https://i.ytimg.com/vi/HG8tWasSL6I/maxresdefault.jpg"
              />
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img
                variant="top"
                src="https://i.ytimg.com/vi/HG8tWasSL6I/maxresdefault.jpg"
              />
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img
                variant="top"
                src="https://i.ytimg.com/vi/HG8tWasSL6I/maxresdefault.jpg"
              />
            </Card>
          </Col>
        </Row>
      </Carousel.Item>
    </Carousel>
  );
}

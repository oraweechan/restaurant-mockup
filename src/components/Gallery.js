import TextContent from "./TextContent";
import { Col, Container, Row } from "react-bootstrap";
import classes from "./Gallery.module.css";

function Gallery() {
  return (
    <>
      <Container>
        <Row className={classes.about_items}>
          <Col xs={12} sm={5}>
            {" "}
            <div className="about_left">
              <div className="about_left_content">
                <h5>ABOUT</h5>
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam eget urna at libero finibus pretium. Donec faucibus
                  volutpat nisl ac placerat.
                </p>
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam eget urna at libero finibus pretium. Donec faucibus
                  volutpat nisl ac placerat. Vestibulum odio turpis, volutpat at
                  aliquet sit amet, volutpat eu lectus.
                </p>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={7}>
            {" "}
            <div className="about_right">
              <div className="about_right_content">
                <div className="gallery-items">
                  <Row className="items-row1">
                    <Col sm={6}>
                      <img
                        src="https://github.com/dcartist/FrontEndHackathon/blob/master/MOCKUP/Restaurant/images/unsplash_lP5MCM6nZ5A.jpg?raw=true"
                        alt="tacos"
                      />
                    </Col>
                    <Col sm={6}>
                      {" "}
                      <img
                        src="https://github.com/dcartist/FrontEndHackathon/blob/master/MOCKUP/Restaurant/images/unsplash_SqYmTDQYMjo.jpg?raw=true"
                        alt="sandwich1"
                      />
                    </Col>
                  </Row>
                  <Row className="items-row2">
                    <Col sm={4}>
                      <img
                        src="https://github.com/dcartist/FrontEndHackathon/blob/master/MOCKUP/Restaurant/images/unsplash_mAQZ3X_8_l0.jpg?raw=true"
                        alt="sandwich2"
                      />
                    </Col>
                    <Col sm={4}>
                      {" "}
                      <img
                        src="https://github.com/dcartist/FrontEndHackathon/blob/master/MOCKUP/Restaurant/images/unsplash_q54Oxq44MZs.jpg?raw=true"
                        alt="donut"
                      />
                    </Col>
                    <Col sm={4}>
                      {" "}
                      <img
                        src="https://github.com/dcartist/FrontEndHackathon/blob/master/MOCKUP/Restaurant/images/unsplash_CbNAuxSZTFo.jpg?raw=true"
                        alt="pizza"
                      />
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>

    // <div className="gallery">
    //   <TextContent>
    //     {" "}
    //     Ultricies arcu bibendum bitae congue proin sit aliquam, felis venenatis{" "}
    //   </TextContent>
  );
}

export default Gallery;

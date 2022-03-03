import TextContent from "./TextContent";
import { Col, Container, Row } from "react-bootstrap";
import classes from "./Gallery.module.css";

function Gallery() {
  return (
    <>
      <Container>
        <Row className={classes.about_items}>
          <Col xs={6} sm={5}>
            {" "}
            <div className={classes.about_left}>
              <div className="about_left_content">
                <h5>Gallery</h5>
                <h4>Feast your eyes</h4>
                <p>
                  {" "}
                  Morbi malesuada sit odio dui aliquam at sollicitudin leo ac.
                  Faucibus cras ac accumsan id quam. Cursus.
                </p>
                <p> CHECK NOW</p>
              </div>
            </div>
          </Col>
          <Col xs={6} sm={7}>
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

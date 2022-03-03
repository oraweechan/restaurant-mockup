import { Col, Container, Row } from "react-bootstrap";
import classes from "./AboutSection.module.css";


export default function AboutSection() {
  return (
    <>
      <Container className={classes.about_section}>
        <Row className={classes.about_items}>
          <Col xs={12} sm={7}>
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
          <Col xs={12} sm={5}>
            {" "}
            <div className="about_right">
              <div className="about_right_content">
                <h5>FEATURES</h5>
                <p> Fusce proin faucibus cursus urna, sit donec</p>
                <p> imperdiet. Dapibus non at ultrices adipiscing</p>
                <p> faucibus elit neque, velit eu. Fermentum.</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

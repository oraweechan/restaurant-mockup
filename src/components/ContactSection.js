import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function ContactSection() {
  return (
    <Container className="contact">
      <Row className="branches">
        <Col className="branch_left">
          <h3>Our Branches</h3>
          <p>
            {" "}
            Li lingues differe solmen in li grammatica, li pronunciation e li
            plu commun vocabules. Omnicos directe al desirabilite
          </p>
          <ul>
            <li>4266 South Street, Tualatin, OR 97062</li>
            <li>5666 Mill Street, Odenton, MD 21113</li>
            <li>8741 Lilac Lane, State College, PA 16801</li>
            <li>6268 1st Avenue, Brookline, MA 02446</li>
            <li>7591 Broadway, Milwaukee, WI 53204</li>
          </ul>
        </Col>
        <Col className="branch_right">
          <div className="contact-photo">
            <img
              src="https://github.com/dcartist/FrontEndHackathon/blob/master/MOCKUP/Restaurant/images/unsplash_IGfIGP5ONV0.jpg?raw=true"
              alt="salad"
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

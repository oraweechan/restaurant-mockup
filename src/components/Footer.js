import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <Container className="Footer">
      <Row className="footer-items">
  
      <span>2022 Copyrights. All rights reserved.</span>
        <div className="footer-socials">
       
          <img
            src="https://res.cloudinary.com/orawee/image/upload/v1646186186/icons8-facebook-24_x35gck.png"
            alt="fb"
          />
          <img
            src="https://res.cloudinary.com/orawee/image/upload/v1646186106/icons8-twitter-24_jgtapl.png"
            alt="twitter"
          />
          <img
            src="https://res.cloudinary.com/orawee/image/upload/v1646186285/icons8-behance-24_qjbmgb.png"
            alt="behance"
          />
          <img
            src="https://res.cloudinary.com/orawee/image/upload/v1646186378/icons8-pinterest-24_fqeuai.png"
            alt="pinterest"
          />
          <img
            src="https://res.cloudinary.com/orawee/image/upload/v1646186400/icons8-linkedin-24_k1wuou.png"
            alt="linkedin"
          />
        </div>
    
          
      </Row>
    </Container>
  );
}

export default Footer;

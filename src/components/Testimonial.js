import TextContent from "./TextContent";
import classes from "./Testimonial.module.css";
import { Container } from "react-bootstrap";

function Testimonial() {
  return (
    <Container className={classes.testimonial}>
      <div className={classes.heading}>
      <span>TESTIMONIAL</span>
      

      </div>
      
      <div className={classes.testimonial_item}>
        <img
          className={classes.testimonial_photo}
          src="https://github.com/dcartist/FrontEndHackathon/blob/master/MOCKUP/Restaurant/images/unsplash_mEZ3PoFGs_k.jpg?raw=true"
          alt="testimonial-photo1"
        />
        <div className="testimonial-content">
          <p>
            Laudantium, totam rem aperi, eaque ipsa quaea illo sol invente
            veritatis eta quasi architecto sach sunt voluptatem quia voluptas.
            sit aspernatur aut odita aut fugit, sed quia consequuntur. eos qui
            ratione voluptatem sequi nesciun
          </p>
          <div className="ratings">
            <img
              src="https://github.com/dcartist/FrontEndHackathon/blob/master/MOCKUP/Restaurant/images/Star%204.png?raw=true"
              alt="star"
            />
            <img
              src="https://github.com/dcartist/FrontEndHackathon/blob/master/MOCKUP/Restaurant/images/Star%204.png?raw=true"
              alt="star"
            />
            <img
              src="https://github.com/dcartist/FrontEndHackathon/blob/master/MOCKUP/Restaurant/images/Star%204.png?raw=true"
              alt="star"
            />
            <img
              src="https://github.com/dcartist/FrontEndHackathon/blob/master/MOCKUP/Restaurant/images/Star%204.png?raw=true"
              alt="star"
            />
            <img
              src="https://github.com/dcartist/FrontEndHackathon/blob/master/MOCKUP/Restaurant/images/Star%205.png?raw=true"
              alt="star"
            />
          </div>
          <span>LOREM IPSUM</span>
        </div>
      </div>

      <div className={classes.testimonial_item}>
        <img
          className={classes.testimonial_photo}
          src="https://github.com/dcartist/FrontEndHackathon/blob/master/MOCKUP/Restaurant/images/unsplash_sibVwORYqs0.jpg?raw=true"
          alt="testimonial-photo1"
        />
        <div className="testimonial-content">
          <p>
            Laudantium, totam rem aperi, eaque ipsa quaea illo sol invente
            veritatis eta quasi architecto sach sunt voluptatem quia voluptas.
            sit aspernatur aut odita aut fugit, sed quia consequuntur. eos qui
            ratione voluptatem sequi nesciun
          </p>
          <div className="ratings">
            <img
              src="https://github.com/dcartist/FrontEndHackathon/blob/master/MOCKUP/Restaurant/images/Star%204.png?raw=true"
              alt="star"
            />
            <img
              src="https://github.com/dcartist/FrontEndHackathon/blob/master/MOCKUP/Restaurant/images/Star%204.png?raw=true"
              alt="star"
            />
            <img
              src="https://github.com/dcartist/FrontEndHackathon/blob/master/MOCKUP/Restaurant/images/Star%204.png?raw=true"
              alt="star"
            />
            <img
              src="https://github.com/dcartist/FrontEndHackathon/blob/master/MOCKUP/Restaurant/images/Star%204.png?raw=true"
              alt="star"
            />
            <img
              src="https://github.com/dcartist/FrontEndHackathon/blob/master/MOCKUP/Restaurant/images/Star%205.png?raw=true"
              alt="star"
            />
          </div>
          <p>LOREM IPSUM</p>
        </div>
      </div>
    </Container>
  );
}

export default Testimonial;

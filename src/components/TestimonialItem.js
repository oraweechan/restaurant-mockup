import classes from './TestimonialItem.module.css';

export default function TestimonialItem() {
  return (
    <div className={classes.testimonial_item}>
    <img
      className={classes.testimonial_photo}
      src="https://github.com/dcartist/FrontEndHackathon/blob/master/MOCKUP/Restaurant/images/unsplash_mEZ3PoFGs_k.jpg?raw=true"
      alt="testimonial-photo1"
    />
    <div className="testimonial-content">
      <p>lorem ipsum review</p>
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
      <p>lorem ipsum</p>
    </div>
  </div>
  )
}

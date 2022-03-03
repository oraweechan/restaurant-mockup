import classes from "./NavMenu.module.css";

export default function NavMenu() {
  return (
    <header className={classes.header}>
      <div className="nav-menu-logo">
        <h3>Restaurant</h3>
      </div>
      <nav>
        <ul>
          <li>ABOUT</li>
          <li>GALLERY</li>
          <li>TESTIMONIAL</li>
          <div className={classes.contact}>
          <li>
            <img
              src="https://res.cloudinary.com/orawee/image/upload/v1646243594/icons8-phone-24_dkh7dh.png"
              alt="phone-icon"
            />
            1800-123-4567
          </li>
              
          </div>
          
          <li className={classes.reservations}>RESERVATION</li>
        </ul>
      </nav>
    </header>
  );
}

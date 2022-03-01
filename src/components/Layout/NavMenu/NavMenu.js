import classes from "./NavMenu.module.css";

export default function NavMenu() {
    return (
        <header className= {classes.header}>
            <div className="nav-menu-logo">
                <h3>Restaurant</h3>
            </div>
            <nav>
                <ul>
                    <li>ABOUT</li>
                    <li>GALLERY</li>
                    <li>TESTIMONIAL</li>
                    <li>1800-123-4567</li>
                    <li className={classes.reservations}>RESERVATION</li>
                </ul>
            </nav>
        </header>
    )
}; 
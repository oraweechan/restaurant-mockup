import classes from './HeroSection.module.css';

export default function HeroSection() {
    return (
        <section className= {classes.hero}>
            <div className= {classes.heroItems}>
            <h1>Tellus scelerisque donec consequat, purus lorem.</h1>
            <h3>Ultrices at fusce purus sed.</h3>
            <a href="#">MAKE RESERVATION</a>

            </div>
        </section>
    )
}; 
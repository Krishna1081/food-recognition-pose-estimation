import hero from "../assets/hero.png";

function HeroSection() {
  return (
    <div className="hero-page-web">
      <section>
        <div>
          <h1 className="change-color">Meet Foodify:</h1>
          <h1>
            Health made easy <br /> with AI.
          </h1>
        </div>
        <p>Improve your health using food recognition and AI Trainer</p>
        <div className="btn-group">
          <button className="btn">AI Trainer</button>
          <button className="btn">Food Recognition</button>
        </div>
      </section>
      <aside>
        <img src={hero} className="img-hero" alt="Hero" />
      </aside>
    </div>
  );
}

export default HeroSection;

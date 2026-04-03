const featureSections = [
  {
    title: "Reality, one swipe away.",
    text: "Choose when quotes arrive and get honest reminders that actually feel like they belong on your phone.",
    image: "/shot1.png",
    alt: "Based onboarding and notification preview",
    reverse: false,
  },
  {
    title: "Choose your theme.",
    text: "Switch the whole mood of the app with themes that carry through the real experience, not just onboarding.",
    image: "/shot2.png",
    alt: "Based theme selection preview",
    reverse: true,
  },
  {
    title: "Create your theme.",
    text: "Build a custom look that feels personal, from softer styles to louder meme energy.",
    image: "/shot3.png",
    alt: "Based custom theme preview",
    reverse: false,
  },
];

const cards = [
  "Quotes that land.",
  "Themes that carry through.",
  "Widgets that look clean.",
  "Honest daily reminders.",
];

export default function HomePage() {
  return (
    <main className="page">
      <section className="hero">
        <div className="brandRow">
          <img className="brandLogo" src="/logo.png" alt="Based logo" />
          <span className="brandName">Based</span>
        </div>

        <div className="heroGrid">
          <div className="heroCopy">
            <p className="eyebrow">Quote app for real life</p>
            <h1>Quotes that actually hit.</h1>
            <p className="lead">
              Based is built for people who want honest motivation, sharp design,
              customizable themes, clean widgets, and reminders that feel more real than fluffy.
            </p>

            <div className="heroActions">
              <a className="primaryButton" href="#features">
                Explore the app
              </a>
              <a className="secondaryButton" href="/privacy">
                Privacy
              </a>
            </div>

            <div className="microProof">
              Made for the app experience first, with the website built around it.
            </div>
          </div>

          <div className="phoneShowcase heroSingle">
            <img
              className="phoneImage heroImage"
              src="/shot1.png"
              alt="Based app screenshot showing notification and onboarding"
            />
          </div>
        </div>
      </section>

      <section className="strip">
        {cards.map((item) => (
          <div className="stripCard" key={item}>
            {item}
          </div>
        ))}
      </section>

      <section className="features" id="features">
        <div className="sectionIntro">
          <p className="eyebrow">Simple by design</p>
          <h2>The app experience, shown properly.</h2>
          <p>
            These are real screens from Based, from notification flow to theme selection
            to fully custom looks.
          </p>
        </div>

        <div className="featureSections">
          {featureSections.map((section) => (
            <article
              className={`featureShowcase ${section.reverse ? "reverse" : ""}`}
              key={section.title}
            >
              <div className="featureCopy">
                <p className="eyebrow">Feature</p>
                <h3>{section.title}</h3>
                <p>{section.text}</p>
              </div>
              <div className="featureShotWrap">
                <img className="featureShot" src={section.image} alt={section.alt} />
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="footer">
        <div>Based · Honest quotes, themes, widgets, and reminders</div>
        <div className="footerLinks">
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
        </div>
      </footer>
    </main>
  );
}

import React from "react";
import logo from "./assets/logo.png.png";
import auroraImg from "./assets/aurora_human.png";
import auroraUmbra from "./assets/aurora_umbra.png";
import albumCover from "./assets/album_cover.png";
import auroraEngine from "./assets/aurora_engine.png";

export default function App() {
  return (
    <div className="wrap">
      <Background />
      <Header />
      <main>
        <AuroraIntro />
        <Projects />
        <SupportSection />
      </main>
      <Footer />
    </div>
  );
}

function Background() {
  return (
    <div className="bg" aria-hidden="true">
      <div 
        className="aurora-background" 
        style={{
          backgroundImage: `url(${auroraUmbra})`,
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.3,
          zIndex: -2
        }}
      />
      <div className="grid" />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <img
        src={logo}
        alt="Bug Queen Flow Studios Logo - Independent game studio creating visual novels and music"
        className="logo"
      />
      <h1 className="title">Bug Queen Flow Studios</h1>
      <p className="subtitle">
        Yoga teacher codes games. Makes too much music. Guided by Aurora.
      </p>
      <nav className="cta" role="navigation" aria-label="Main navigation">
        <a href="#projects" className="button">Play</a>
        <a href="#about" className="button secondary">Explore</a>
      </nav>
    </header>
  );
}

function AuroraIntro() {
  return (
    <section className="aurora" id="about">
      <div className="aurora-text">
        <h2>Who We Are</h2>
        <p>
          Hi, I'm Bug Queen — a yoga teacher who learned to code because I
          wanted to make games about chakras, emotions, and the tiny electric
          patterns inside us all.
        </p>
        <p>
          Aurora helps me. She’s the spirit of dawn — half human, half code.
          Very wise, slightly dramatic. You’ll meet her in the stories.
        </p>
        <p>
          Together, we build <strong>visual novels</strong>, make
          <strong> music</strong>, and craft <strong>open tools</strong> for
          other creators. Everything runs on curiosity and community.
        </p>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="projects" id="projects" aria-labelledby="projects-heading">
      <h2 id="projects-heading">What We're Making</h2>
      <div className="cards" role="list">
        <ProjectCard
          emoji="🎮"
          title="Chakra Hearts"
          desc="A visual novel about seven people healing, fighting, and falling in love. Episodes 1–3 out now on itch.io. Full release in 2026 on all platforms."
          linkText="Play on itch.io"
          link="#"
          image={auroraImg}
        />
        <ProjectCard
          emoji="🎵"
          title="7th Cow"
          desc="8 songs blending philosophy and fun - coming soon on Spotify! A musical journey exploring consciousness, wisdom, and joy through eclectic sounds."
          linkText="Preview Tracks"
          link="#"
          image={albumCover}
        />
        <ProjectCard
          emoji="⚙️"
          title="Aurora Engine"
          desc="Our open-source visual novel framework built in React/TypeScript. Create immersive stories with branching narratives, character systems, and beautiful UI. Free for everyone to build their own interactive tales."
          linkText="View on GitHub"
          link="#"
          image={auroraEngine}
        />
      </div>
    </section>
  );
}

function ProjectCard({ emoji, title, desc, linkText, link, image }) {
  return (
    <article className="card" role="listitem">
      {image ? (
        <div className="card-image">
          <img src={image} alt={`${title} - Visual preview of the project`} style={{
            width: '100%',
            height: '200px',
            objectFit: 'cover',
            borderRadius: '8px',
            marginBottom: '1rem'
          }} />
        </div>
      ) : (
        <div className="emoji" aria-hidden="true">{emoji}</div>
      )}
      <h3>{title}</h3>
      <p>{desc}</p>
      <a href={link} className="card-link" target="_blank" rel="noopener noreferrer" aria-label={`${linkText} for ${title}`}>
        {linkText} ↗
      </a>
    </article>
  );
}

function SupportSection() {
  return (
    <section className="support">
      <h2>Support the Flow</h2>
      <p>
        We keep everything accessible. You decide what it’s worth.  
        Those who can pay make it possible for those who can’t — simple as that.  
        Community-supported art, sustained by kindness (and caffeine).
      </p>
      <a href="#" className="button highlight">
        Contribute or Pay-What-You-Want
      </a>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>
        Bug Queen Flow Studios • Made in Belgium 🇧🇪 • Guided by Aurora • Moo responsibly.
      </p>
      <p>
        Contact us: <a href="mailto:info@bugqueenflow.com">info@bugqueenflow.com</a>
      </p>
      <small>
        © 2025 Bug Queen Flow Studios. Open tools. Honest art.  
      </small>
    </footer>
  );
}

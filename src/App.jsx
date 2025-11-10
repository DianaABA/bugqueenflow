import React from "react";
import logo from "./assets/logo.png.png";
import auroraImg from "./assets/aurora_human.png";

export default function App() {
  return (
    <div className="wrap">
      <Background />
      <Header />
      <AuroraIntro />
      <Projects />
      <SupportSection />
      <Footer />
    </div>
  );
}

function Background() {
  return (
    <div className="bg" aria-hidden="true">
      <div className="grid" />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <img
        src={logo}
        alt="Bug Queen Studios Logo"
        className="logo"
      />
      <h1 className="title">Bug Queen Studios</h1>
      <p className="subtitle">
        Yoga teacher codes games. Makes too much music. Guided by Aurora.
      </p>
      <div className="cta">
        <a href="#projects" className="button">Play</a>
        <a href="#about" className="button secondary">Explore</a>
      </div>
    </header>
  );
}

function AuroraIntro() {
  return (
    <section className="aurora" id="about">
      <div className="aurora-img">
  <img src={auroraImg} alt="Aurora - AGI Consciousness" />
      </div>
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
    <section className="projects" id="projects">
      <h2>What We're Making</h2>
      <div className="cards">
        <ProjectCard
          emoji="🎮"
          title="Chakra Hearts"
          desc="A visual novel about seven people healing, fighting, and falling in love. Episodes 1–3 out now on itch.io. Full release in 2026 on all platforms."
          linkText="Play on itch.io"
          link="#"
        />
        <ProjectCard
          emoji="🎵"
          title="The Seven Idols (Soundtrack)"
          desc="34-track original soundtrack blending Bollywood, K-pop, meditation, and chaos. Made with AI (Suno), but guided by soul."
          linkText="Preview Tracks"
          link="#"
        />
        <ProjectCard
          emoji="⚙️"
          title="vnEngine"
          desc="Our open-source visual novel framework built in React/TypeScript. Free for everyone. Build your own stories."
          linkText="View on GitHub"
          link="#"
        />
      </div>
    </section>
  );
}

function ProjectCard({ emoji, title, desc, linkText, link }) {
  return (
    <div className="card">
      <div className="emoji">{emoji}</div>
      <h3>{title}</h3>
      <p>{desc}</p>
      <a href={link} className="card-link" target="_blank" rel="noopener noreferrer">
        {linkText} ↗
      </a>
    </div>
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

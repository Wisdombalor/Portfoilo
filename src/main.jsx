import React, {useState} from 'react';
import {createRoot} from 'react-dom/client';
import {Agentation} from 'agentation';
import '@fontsource-variable/geist';
import './style.css';
import {ArrowUpRight, ArrowDown, ArrowUp, Plus, Copy} from './icons.jsx';

const EMAIL = 'Wisdombalor2@gmail.com';
const LIVE = 'https://my-steady-ai.vercel.app';
const screens = [
  {title:'Progress, at a glance.', name:'Home', image:'steady-1.jpg', description:'Days, savings and a daily check-in. The biggest button is for the hardest moment.'},
  {title:'Make an urge easier to name.', name:'Urge log', image:'steady-2.jpg', description:'Rate the urge, then pick what is happening and how it feels.'},
  {title:'A gentle place to start.', name:'Beacon', image:'steady-3.jpg', description:'A calm AI chat with starter prompts, so the first message is easy.'},
];
const capabilities = [
  ['01','Product design','I work out what a person needs at the moment they need it. In Steady, the urge button is the largest action on the home screen.',['User flows','Feature planning','Content & tone']],
  ['02','Interface design','I turn those decisions into clear hierarchy, readable type and a next step that feels obvious.',['Layout & hierarchy','Type & colour','Responsive design']],
  ['03','Frontend development','I build responsive web apps and bring them into the browser. Steady is live, so you can explore the product yourself.',['Responsive web apps','Accessible interfaces','Vercel']],
  ['04','AI experiences','I design the conversation around the feature. Beacon uses starter prompts to make the first message easier.',['Assistant experience','Conversation design']],
];
const features = [
  ['Days & savings','A running count of days and money saved keeps progress in view.'],
  ['Daily check-in','A 20-second check-in helps a person see patterns.'],
  ['Urge history','Rate each urge from 1 to 10, note its trigger and find it later in Recovery.'],
  ['Activities for the urge','Suggestions for something to do right now, while the urge is happening.'],
  ['Blocker guide','Install instructions and links to gambling-site blockers, together in one place.'],
  ['Beacon','An AI chat built into the recovery experience.'],
];

function App(){
  const [copyStatus,setCopyStatus] = useState('');
  async function copyEmail(){
    try {await navigator.clipboard.writeText(EMAIL);setCopyStatus('Email copied.');}
    catch {setCopyStatus('Could not copy. Select the email address below to copy it.');}
  }
  return <>
    <a className="skip" href="#main">Skip to content</a>
    <header className="wrap topbar">
      <a className="wordmark" href="#main" aria-label="Udoh Wisdom, home"><span className="monogram" aria-hidden="true">uw.</span>Udoh Wisdom</a>
      <nav aria-label="Main navigation"><a href="#work">Work</a><a href="#about">What I do</a><a className="nav-contact" href="#contact">Let’s talk</a></nav>
    </header>
    <main id="main">
      <section className="wrap hero" aria-labelledby="hero-title">
        <p className="eyebrow"><span aria-hidden="true" className="dot"/>PRODUCT DESIGNER & FRONTEND DEVELOPER</p>
        <h1 id="hero-title">Thoughtful design.<br/><span className="highlight">Made real.</span></h1>
        <div className="hero-bottom"><p>I’m Wisdom. I design and build apps for people going through hard moments — from the first flow to a working product.</p><div className="hero-actions"><a className="button primary" href="#work">Explore my work <ArrowDown/></a><a className="text-link" href={`mailto:${EMAIL}`}>Email me <ArrowUpRight/></a></div></div>
        <div className="hero-rule"><span>DESIGN WITH CARE. BUILD WITH INTENT.</span><span>SCROLL TO EXPLORE ↓</span></div>
      </section>

      <section className="wrap work section" id="work" aria-labelledby="work-title">
        <div className="section-heading"><p className="eyebrow">01 / SELECTED WORK</p><h2 id="work-title">An idea, brought to life.</h2></div>
        <article className="project">
          <div className="project-top"><div><div className="project-kicker"><span className="pill">DESIGN + DEVELOPMENT</span><span>RECOVERY COMPANION</span></div><h3>Steady<span className="project-period">.</span></h3><p>A calmer next step for people<br className="desktop-break"/> quitting gambling.</p></div><div className="project-meta"><dl><div><dt>My role</dt><dd>Product design & frontend development</dd></div><div><dt>Platform</dt><dd>Responsive web app</dd></div></dl><a className="button dark" href={LIVE} target="_blank" rel="noopener noreferrer">Explore live app <ArrowUpRight/></a></div></div>
          <div className="screens" aria-label="Steady product screens">{screens.map((screen,i)=><figure key={screen.name} className={`screen screen-${i}`}><div className="screen-frame"><img src={`/assets/${screen.image}`} alt={`Steady ${screen.name} screen`} width="720" height={i===0?'1204':i===1?'1049':'900'} loading="lazy" decoding="async"/></div><figcaption><span className="screen-number">0{i+1}</span><span>{screen.name}</span></figcaption></figure>)}</div>
        </article>
        <div className="case-intro"><h3>Support for the moment<br/>that matters.</h3><div><p>Steady brings progress tracking, urge logging and a calm AI conversation into one place. I designed and built the experience around the next action a person needs.</p><p className="muted">The screens show the product and the decisions behind it. Explore the live app to try the experience.</p></div></div>
        <div className="decisions">{screens.map(screen=><div key={screen.name}><span className="eyebrow">{screen.name}</span><h4>{screen.title}</h4><p>{screen.description}</p></div>)}</div>
        <details className="feature-details"><summary>Explore the features <span aria-hidden="true" className="plus"><Plus/></span></summary><dl className="features">{features.map(([title,description])=><div key={title}><dt>{title}</dt><dd>{description}</dd></div>)}</dl></details>
      </section>

      <section className="capability-section section" id="about" aria-labelledby="about-title"><div className="wrap"><div className="section-heading"><p className="eyebrow">02 / WHAT I DO</p><h2 id="about-title">From the why<br/>to the working thing.</h2><p className="section-intro">Design and development belong in the same conversation. Here’s how I bring them together.</p></div><div className="capabilities">{capabilities.map(([number,title,text,skills])=><article key={number} className="capability"><span className="capability-number">{number}</span><div><h3>{title}</h3><p>{text}</p><ul aria-label={`${title} skills`}>{skills.map(skill=><li key={skill}>{skill}</li>)}</ul></div></article>)}</div></div></section>

      <section className="wrap contact section" id="contact" aria-labelledby="contact-title"><p className="eyebrow">03 / LET’S TALK</p><h2 id="contact-title">Have something<br/><span>in mind?</span></h2><div className="contact-bottom"><p>A project, a role or an interesting idea.<br/>I’d love to hear about it.</p><div><div className="contact-actions"><a className="button dark" href={`mailto:${EMAIL}`}>Email me <ArrowUpRight/></a><button className="button outline" type="button" onClick={copyEmail}>Copy email <Copy/></button></div><p className="copy-status" role="status" aria-live="polite">{copyStatus}</p></div></div><a className="email-address" href={`mailto:${EMAIL}`}>{EMAIL}</a></section>
    </main>
    <footer className="wrap footer"><span>Udoh Wisdom <span className="muted">/ Design & development</span></span><a href="https://github.com/Wisdombalor" target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight/></a><a href="#main">Back to top <ArrowUp/></a></footer>
  </>;
}
createRoot(document.getElementById('root')).render(<React.StrictMode><App/>{import.meta.env.DEV && <Agentation endpoint="http://localhost:4747"/>}</React.StrictMode>);

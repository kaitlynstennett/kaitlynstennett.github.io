const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Research", href: "#research" },
  { label: "Community", href: "#community" },
  { label: "Contact", href: "#contact" },
];

const experiencePlaceholders = [
  {
    number: "01",
    title: "Clinical experience",
    meta: "Placement · Dates to add",
    body: "Add your clinical placements, specialties observed, and a brief reflection on what you learned.",
    tag: "Details to add",
  },
  {
    number: "02",
    title: "Research & scholarship",
    meta: "Project · Dates to add",
    body: "Highlight a research project, literature review, poster, publication, or academic collaboration.",
    tag: "Details to add",
  },
  {
    number: "03",
    title: "Leadership & service",
    meta: "Role · Dates to add",
    body: "Share a committee role, peer-teaching position, student society, or service contribution.",
    tag: "Details to add",
  },
];

const interestPlaceholders = [
  { index: "A", title: "Research interest", copy: "A concise description of a clinical or scientific question you are drawn to." },
  { index: "B", title: "Medical education", copy: "A note on teaching, mentorship, widening access, or how people learn medicine." },
  { index: "C", title: "Health & community", copy: "A community health issue, advocacy area, or patient population you care about." },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Kaitlyn Stennett, home">KS<span>.</span></a>
        <nav aria-label="Primary navigation">
          {navItems.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
        </nav>
        <a className="header-link" href="#contact">Get in touch <span aria-hidden="true">↗</span></a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Medicine · Curiosity · Community</p>
          <h1>Kaitlyn<br /><em>Stennett.</em></h1>
          <p className="hero-intro">
            Medical student at the University of St Andrews, learning at the intersection of thoughtful science, compassionate care, and human connection.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#about">Discover my work <span aria-hidden="true">↓</span></a>
            <a className="button button-text" href="#contact">Let&apos;s connect <span aria-hidden="true">↗</span></a>
          </div>
        </div>

        <div className="portrait-wrap" aria-label="Portrait placeholder for Kaitlyn Stennett">
          <div className="portrait-placeholder">
            <div className="portrait-initials">KS</div>
            <p>Headshot placeholder</p>
            <small>Replace with a vertical portrait</small>
          </div>
          <div className="portrait-caption"><span>Studying at</span><strong>St Andrews, Scotland</strong></div>
        </div>
      </section>

      <section className="intro-strip" id="about">
        <p className="section-label">01 — A little about me</p>
        <div>
          <p className="intro-statement">
            I&apos;m developing the knowledge, judgement, and empathy to contribute meaningfully to medicine—one patient, question, and experience at a time.
          </p>
          <div className="about-grid">
            <p>
              My medical education at St Andrews is helping me build a rigorous scientific foundation while staying attentive to the person behind every clinical story.
            </p>
            <p className="placeholder-note">
              <strong>Personalise this section</strong>
              Add a few lines about what brought you to medicine, the experiences that have shaped you, and the kind of colleague or clinician you hope to become.
            </p>
          </div>
        </div>
      </section>

      <section className="education section-shell" aria-labelledby="education-title">
        <div className="section-heading">
          <p className="section-kicker">Education</p>
          <h2 id="education-title">A foundation for lifelong learning.</h2>
        </div>
        <div className="education-card">
          <div className="crest-placeholder" aria-hidden="true">U<span>StA</span></div>
          <div>
            <p className="card-overline">Current education</p>
            <h3>University of St Andrews</h3>
            <p className="card-subtitle">Medical student · Degree details and expected graduation to add</p>
          </div>
          <p className="education-copy">
            Add your course stage, selected modules, academic distinctions, or a short note on the areas of your medical education you have found most formative.
          </p>
        </div>
      </section>

      <section className="experience section-shell" id="experience" aria-labelledby="experience-title">
        <div className="section-heading heading-row">
          <div>
            <p className="section-kicker">02 — Experience</p>
            <h2 id="experience-title">Learning through practice.</h2>
          </div>
          <p className="heading-aside">A place for the clinical, academic, and leadership experiences shaping your path through medicine.</p>
        </div>
        <div className="experience-list">
          {experiencePlaceholders.map((item) => (
            <article className="experience-item" key={item.number}>
              <span className="item-number">{item.number}</span>
              <div><p className="item-meta">{item.meta}</p><h3>{item.title}</h3></div>
              <p>{item.body}</p>
              <span className="status-tag">{item.tag}</span>
            </article>
          ))}
        </div>
        <div className="cv-callout">
          <div><p className="section-kicker">Curriculum vitae</p><h3>For the complete picture.</h3></div>
          <p>Add a PDF of your CV when it is ready. The button can then link directly to a downloadable copy.</p>
          <span className="button button-outline" aria-disabled="true">CV coming soon</span>
        </div>
      </section>

      <section className="research" id="research" aria-labelledby="research-title">
        <div className="research-inner">
          <div className="section-heading research-heading">
            <p className="section-kicker">03 — Research & interests</p>
            <h2 id="research-title">Questions worth pursuing.</h2>
            <p>
              Use this space to show how your curiosity extends beyond the curriculum. These prompts can become your real focus areas as your interests develop.
            </p>
          </div>
          <div className="interest-list">
            {interestPlaceholders.map((item) => (
              <article key={item.index}>
                <span>{item.index}</span>
                <div><h3>{item.title}</h3><p>{item.copy}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="community section-shell" id="community" aria-labelledby="community-title">
        <div className="section-heading heading-row">
          <div><p className="section-kicker">04 — Beyond the lecture theatre</p><h2 id="community-title">People, perspective, purpose.</h2></div>
          <p className="heading-aside">Medicine is practiced in community. This section is ready for the work, interests, and commitments that keep you connected to yours.</p>
        </div>
        <div className="community-grid">
          <article className="community-feature">
            <p className="card-overline">Community & service</p>
            <h3>Add the cause or community you contribute to.</h3>
            <p>Describe your volunteering, advocacy, outreach, or widening-participation work—and why it matters to you.</p>
          </article>
          <article><span>01</span><h3>Societies</h3><p>Student groups, committees, sports, or creative communities.</p></article>
          <article><span>02</span><h3>Teaching</h3><p>Peer support, tutoring, mentoring, or educational initiatives.</p></article>
          <article><span>03</span><h3>Outside medicine</h3><p>A few human details: interests, pursuits, and what restores your energy.</p></article>
        </div>
      </section>

      <section className="contact" id="contact" aria-labelledby="contact-title">
        <div>
          <p className="section-kicker">05 — Contact</p>
          <h2 id="contact-title">Let&apos;s start a<br /><em>conversation.</em></h2>
        </div>
        <div className="contact-details">
          <p>I&apos;m always glad to connect with peers, mentors, researchers, and people working to improve health and care.</p>
          <div className="contact-row"><span>Email</span><strong>your.email@example.com</strong></div>
          <div className="contact-row"><span>LinkedIn</span><strong>Add your profile URL</strong></div>
          <div className="contact-row"><span>Location</span><strong>St Andrews, Scotland</strong></div>
        </div>
      </section>

      <footer>
        <a className="wordmark wordmark-light" href="#top" aria-label="Back to top">KS<span>.</span></a>
        <p>© {new Date().getFullYear()} Kaitlyn Stennett</p>
        <a href="#top">Back to top <span aria-hidden="true">↑</span></a>
      </footer>
    </main>
  );
}

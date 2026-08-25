import Image from 'next/image';
import PasswordGate from './password-gate';

const asset = (path: string) =>
  `${process.env.GITHUB_PAGES === 'true' ? '/madeline-jack-wedding' : ''}${path}`;

const faqs = [
  {
    question: 'When should I RSVP?',
    answer: 'RSVPs are not open yet. Your formal invitation will include the deadline and instructions for responding here.',
  },
  {
    question: 'Where will the celebration take place?',
    answer: 'The celebration will take place at Dawnridge in Beverly Hills, California. The full address and arrival notes will be shared directly with invited guests.',
  },
  {
    question: 'What should I wear?',
    answer: 'We’ll share the dress code with the full wedding details. The celebration will include time in the garden.',
  },
  {
    question: 'Can I bring a guest or my children?',
    answer: 'Please refer to the names listed on your formal invitation. If you have a question about your party, reach out to Madeline or Jack directly.',
  },
];

export default function Home() {
  return (
    <PasswordGate
      backgroundImage={asset('/images/dawnridge-entry-hq.webp')}
      monogram={asset('/images/monogram-centered.png')}
    >
    <main>
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Madeline and Jack, home">M <span>·</span> J</a>
        <nav aria-label="Primary navigation">
          <a href="#story">Our story</a>
          <a href="#details">The day</a>
          <a href="#travel">Travel</a>
          <a href="#registry">Registry</a>
          <a className="nav-rsvp" href="#rsvp">RSVP</a>
        </nav>
      </header>

      <section className="hero" id="home" aria-labelledby="hero-title">
        <div className="hero-image" aria-hidden="true" style={{ backgroundImage: `url('${asset('/images/dawnridge-entry-hq.webp')}')` }} />
        <div className="hero-shade" aria-hidden="true" />
        <div className="hero-card">
          <Image className="hero-monogram" src={asset('/images/monogram-centered.png')} alt="Madeline and Jack monogram" width={1300} height={398} priority />
          <h1 id="hero-title" className="sr-only">Madeline and Jack are getting married</h1>
          <p>Are getting married</p>
        </div>
        <p className="hero-note hero-note-left">Madeline &amp; Jack</p>
        <p className="hero-note hero-note-right">Dawnridge · Beverly Hills</p>
        <a className="scroll-cue" href="#story" aria-label="Continue to our story">Scroll</a>
      </section>

      <section className="story-section" id="story" aria-labelledby="story-title">
        <p className="eyebrow">How we got here</p>
        <div className="story-heading">
          <p>OUR LOVE<br />FOR ADVENTURE</p>
          <figure>
            <Image src={asset('/images/story-polaroid.webp')} alt="Madeline and Jack with their dog at the beach" width={1200} height={1458} loading="eager" />
          </figure>
          <p>(AND EACH<br />OTHER)</p>
        </div>
        <h2 id="story-title">A lot of good days together.</h2>
        <p className="story-copy">
          Madeline and Jack spend a lot of time near the beach with their dog. They’re
          looking forward to having everyone they love in one place for the wedding.
        </p>
      </section>

      <section className="photo-break" aria-label="Madeline and Jack at the beach">
        <Image src={asset('/images/couple-embrace.webp')} alt="Madeline and Jack embracing on the beach" width={1800} height={1219} loading="eager" />
        <p>A very good day at the beach.</p>
      </section>

      <section className="details-section" id="details" aria-labelledby="details-title">
        <div className="section-number">01</div>
        <p className="eyebrow">The wedding day</p>
        <h2 id="details-title">The celebration</h2>
        <p className="section-intro">
          We’ll celebrate at Dawnridge, a private estate in Beverly Hills. The date,
          timing, and full schedule will be shared here as soon as plans are final.
        </p>
        <div className="detail-grid">
          <article>
            <span>Where</span>
            <h3>Dawnridge</h3>
            <p>Beverly Hills<br />California</p>
          </article>
          <article>
            <span>When</span>
            <h3>Coming soon</h3>
            <p>Formal invitation<br />to follow</p>
          </article>
          <article>
            <span>The mood</span>
            <h3>Garden party</h3>
            <p>Dinner, drinks<br />and plenty of dancing</p>
          </article>
        </div>
        <a className="text-link" href="#rsvp">RSVP details <span>↘</span></a>
      </section>

      <section className="venue-section" aria-labelledby="venue-title">
        <div className="venue-image tall-image">
          <Image src={asset('/images/dawnridge-ceiling.webp')} alt="Painted ceiling and chandelier at Dawnridge" fill sizes="(max-width: 800px) 100vw, 50vw" loading="eager" />
        </div>
        <div className="venue-copy">
          <p className="eyebrow">The setting</p>
          <h2 id="venue-title">Tucked into the hills.</h2>
          <p>
            Dawnridge is a private estate filled with hand-painted rooms, lush gardens,
            and details collected over many years. We’re excited to share it with you.
          </p>
          <div className="mini-image">
            <Image src={asset('/images/dawnridge-interior.webp')} alt="Richly decorated room at Dawnridge" fill sizes="(max-width: 800px) 70vw, 25vw" loading="eager" />
          </div>
        </div>
      </section>

      <section className="gallery-section" aria-labelledby="gallery-title">
        <p className="eyebrow">A few favorites</p>
        <h2 id="gallery-title">Us, lately.</h2>
        <div className="gallery-grid">
          <figure className="gallery-one"><Image src={asset('/images/couple-kiss.webp')} alt="Madeline and Jack kissing at the beach" fill sizes="(max-width: 700px) 90vw, 30vw" loading="eager" /></figure>
          <figure className="gallery-two"><Image src={asset('/images/beach-walk.webp')} alt="Madeline and Jack walking their dog on the beach" fill sizes="(max-width: 700px) 90vw, 50vw" loading="eager" /></figure>
          <figure className="gallery-three"><Image src={asset('/images/couple-dogs.webp')} alt="Madeline and Jack with their dog" fill sizes="(max-width: 700px) 90vw, 26vw" loading="eager" /></figure>
          <figure className="gallery-four"><Image src={asset('/images/dogs-running.webp')} alt="Madeline and Jack's dog running on the beach" fill sizes="(max-width: 700px) 90vw, 43vw" loading="eager" /></figure>
        </div>
      </section>

      <section className="travel-section" id="travel" aria-labelledby="travel-title">
        <div className="section-number">02</div>
        <p className="eyebrow">Plan your stay</p>
        <h2 id="travel-title">Meet us in Los Angeles.</h2>
        <p className="section-intro">
          We’ll add hotel recommendations, transportation notes, and a weekend guide
          once the plans are set. For now, plan around Beverly Hills, California.
        </p>
        <div className="travel-grid">
          <article>
            <p className="card-number">01</p>
            <h3>Arriving</h3>
            <p>Airport and local transportation guidance will be added with the formal details.</p>
          </article>
          <article>
            <p className="card-number">02</p>
            <h3>Staying</h3>
            <p>Our recommended hotels and any room-block information will appear here.</p>
          </article>
          <article>
            <p className="card-number">03</p>
            <h3>Exploring</h3>
            <p>We’ll share a short list of the places we love for coffee, dinner, and a day out.</p>
          </article>
        </div>
      </section>

      <section className="registry-section" id="registry" aria-labelledby="registry-title">
        <div className="registry-art" aria-hidden="true">
          <Image src={asset('/images/monogram-centered.png')} alt="" width={1300} height={398} />
        </div>
        <div>
          <p className="eyebrow">Registry</p>
          <h2 id="registry-title">Details coming soon.</h2>
          <p>
            We’re still putting the registry together. We’ll add the links here when
            everything is ready.
          </p>
          <span className="registry-note">Registry links coming soon</span>
        </div>
      </section>

      <section className="faq-section" id="faq" aria-labelledby="faq-title">
        <div>
          <p className="eyebrow">Good to know</p>
          <h2 id="faq-title">Questions,<br />answered.</h2>
          <Image src={asset('/images/dawnridge-table.webp')} alt="Vintage glassware at Dawnridge" width={564} height={846} loading="eager" />
        </div>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <details key={faq.question}>
              <summary><span>{String(index + 1).padStart(2, '0')}</span>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="rsvp-section" id="rsvp" aria-labelledby="rsvp-title">
        <Image className="rsvp-monogram" src={asset('/images/monogram-centered.png')} alt="" width={1300} height={398} />
        <p className="eyebrow">We hope you’ll be there</p>
        <h2 id="rsvp-title">RSVPs will open soon.</h2>
        <p>
          When formal invitations go out, you’ll be able to find your party and
          respond right here.
        </p>
        <a className="button" href="#home">Back to the beginning</a>
      </section>

      <footer>
        <p>Madeline <i>&amp;</i> Jack</p>
        <span>Made with love · Los Angeles</span>
      </footer>
    </main>
    </PasswordGate>
  );
}

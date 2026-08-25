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
  {
    question: 'Should I rent a car?',
    answer: 'A car is useful if you plan to explore Los Angeles, but it is not necessary for the wedding itself. Rideshare is the simplest option for getting to and from Dawnridge. Please do not plan to drive after the reception.',
  },
  {
    question: 'Will there be parking at Dawnridge?',
    answer: 'Parking and drop-off instructions will be included with the formal invitation. Because Dawnridge is a private estate in the hills, please follow the arrival instructions rather than navigating to the property on your own.',
  },
  {
    question: 'Which airport should I use?',
    answer: 'LAX has the widest range of flights. Hollywood Burbank Airport is smaller and can be an easier option when a nonstop flight is available. Travel time from either airport depends heavily on Los Angeles traffic.',
  },
  {
    question: 'Where should I stay?',
    answer: 'We recommend staying in or just outside Beverly Hills. The Beverly Hills Hotel is the closest luxury option, The Maybourne is the most walkable, Hotel 850 SVB is the small design-led pick, and Avalon is the most relaxed. More details are in the travel section above.',
  },
];

// The layout supports multiple paragraphs; replace this array with the couple's final story copy.
const loveStoryParagraphs = [
  'Madeline and Jack spend a lot of time near the beach with their dog. They’re looking forward to having everyone they love in one place for the wedding.',
];

const hotels = [
  {
    name: 'The Beverly Hills Hotel',
    label: 'Closest luxury option',
    address: '9641 Sunset Boulevard',
    description: 'The most convenient splurge for Dawnridge, with historic rooms, bungalows, the Polo Lounge, and a quiet setting north of Sunset.',
    href: 'https://www.dorchestercollection.com/los-angeles/the-beverly-hills-hotel',
  },
  {
    name: 'The Maybourne Beverly Hills',
    label: 'Best walkable location',
    address: '225 North Canon Drive',
    description: 'A polished stay beside Beverly Cañon Gardens, one block from Rodeo Drive and an easy walk to central Beverly Hills restaurants.',
    href: 'https://www.maybourne.com/en/hotels/the-maybourne-beverly-hills',
  },
  {
    name: 'Hotel 850 SVB',
    label: 'Small design hotel',
    address: '850 North San Vicente Boulevard',
    description: 'A 23-room hotel with Rita Konig interiors, a residential feel, breakfast in the living room, and a roof deck. It sits between Beverly Hills and West Hollywood.',
    href: 'https://www.hotel850svb.com/',
  },
  {
    name: 'Avalon Hotel Beverly Hills',
    label: 'Relaxed alternative',
    address: '9400 West Olympic Boulevard',
    description: 'A quieter mid-century hotel centered around a pool. It is a good option for guests who want Beverly Hills without staying in the busiest part of town.',
    href: 'https://www.avalon-hotel.com/beverly-hills/',
  },
];

const nearbyGuide = [
  {
    name: 'Chaumont',
    type: 'Coffee & breakfast',
    description: 'French pastries, coffee, and a straightforward breakfast stop on South Beverly Drive.',
    href: 'https://www.chaumontbakery.com/',
  },
  {
    name: 'The Cheese Store of Beverly Hills',
    type: 'Lunch & provisions',
    description: 'A neighborhood institution since 1967, now with a cafe for excellent sandwiches and a deep counter of cheese, wine, and picnic supplies.',
    href: 'https://cheesestore.com/',
  },
  {
    name: 'La Dolce Vita',
    type: 'Dinner',
    description: 'A small, old-school Italian dining room in Beverly Hills with red booths, low light, and a menu built for a long dinner. Reserve ahead.',
    href: 'https://www.ladolcevitabeverlyhills.com/',
  },
  {
    name: 'Greystone Mansion',
    type: 'Gardens',
    description: 'Free public grounds at a historic Beverly Hills estate. Check the city site for hours and private-event closures.',
    href: 'https://beverlyhills.org/441/Visit-Greystone',
  },
  {
    name: 'Virginia Robinson Gardens',
    type: 'Garden tour',
    description: 'A historic estate and botanical garden. Tours require advance reservations and walk-ins are not available.',
    href: 'https://parks.lacounty.gov/virginia-robinson-gardens/',
  },
  {
    name: 'Schindler House',
    type: 'Art & architecture',
    description: 'A landmark 1922 house and exhibition space in West Hollywood. Timed tickets are recommended, and it is a rewarding stop for design lovers.',
    href: 'https://www.makcenter.org/planyourvisit',
  },
  {
    name: 'Beverly Hills Farmers’ Market',
    type: 'Sunday morning',
    description: 'A certified neighborhood market held every Sunday from 8 AM to 1 PM, with produce, bread, prepared food, and free two-hour parking.',
    href: 'https://www.beverlyhills.gov/488/Farmers-Market',
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
          <a href="#details">Weekend</a>
          <a href="#travel">Travel</a>
          <a href="#guide">Guide</a>
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
        <div className="story-copy-layout">
          <p className="story-copy-label">Madeline &amp; Jack</p>
          <div className="story-copy">
            {loveStoryParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </div>
      </section>

      <section className="photo-break" aria-label="Madeline and Jack at the beach">
        <Image src={asset('/images/couple-embrace.webp')} alt="Madeline and Jack embracing on the beach" width={1800} height={1219} loading="eager" />
        <p>A very good day at the beach.</p>
      </section>

      <section className="details-section" id="details" aria-labelledby="details-title">
        <div className="section-number">01</div>
        <p className="eyebrow">Schedule at a glance</p>
        <h2 id="details-title">The wedding weekend</h2>
        <p className="section-intro">
          The celebration will take place at Dawnridge in Beverly Hills. We’ll add the
          date, times, attire, and full event schedule as soon as they are confirmed.
        </p>
        <div className="weekend-grid">
          <article>
            <span>Arrival day</span>
            <h3>Welcome to Los Angeles</h3>
            <p>Plan to settle into Beverly Hills before wedding events begin. Any welcome plans will be posted here.</p>
            <strong>Details to come</strong>
          </article>
          <article>
            <span>Wedding day</span>
            <h3>Ceremony &amp; reception</h3>
            <p>Dawnridge<br />Beverly Hills, California</p>
            <strong>Date and time to come</strong>
          </article>
          <article>
            <span>The next morning</span>
            <h3>One more hello</h3>
            <p>If a farewell gathering is added, the time and location will appear here.</p>
            <strong>Details to come</strong>
          </article>
        </div>
        <p className="weekend-note">The formal invitation is the final word on guest names, attire, and event timing.</p>
        <a className="text-link" href="#travel">Plan your stay <span>↘</span></a>
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
          <figure className="gallery-three"><Image src={asset('/images/couple-dog.webp')} alt="Madeline and Jack with their dog" fill sizes="(max-width: 700px) 90vw, 26vw" loading="eager" /></figure>
          <figure className="gallery-four"><Image src={asset('/images/beach-family.webp')} alt="Madeline and Jack with their dog at the beach" fill sizes="(max-width: 700px) 90vw, 43vw" loading="eager" /></figure>
        </div>
      </section>

      <section className="travel-section" id="travel" aria-labelledby="travel-title">
        <div className="section-number">02</div>
        <p className="eyebrow">Getting here &amp; getting around</p>
        <h2 id="travel-title">Stay in Beverly Hills.</h2>
        <p className="section-intro">
          Beverly Hills is the easiest home base for the weekend. You’ll be close to
          Dawnridge, restaurants, shops, and the places listed in our nearby guide.
        </p>
        <div className="arrival-grid">
          <article>
            <p className="card-number">01</p>
            <h3>Fly into LAX</h3>
            <p>LAX has the widest range of nonstop flights. Allow extra time for traffic when leaving the airport, especially on weekday afternoons.</p>
            <a href="https://www.flylax.com/lax-traffic-and-ground-transportation" target="_blank" rel="noreferrer">Ground transportation <span>↗</span></a>
          </article>
          <article>
            <p className="card-number">02</p>
            <h3>Try Burbank</h3>
            <p>Hollywood Burbank Airport is smaller and easier to navigate. It is worth checking when a convenient nonstop flight is available.</p>
            <a href="https://www.hollywoodburbankairport.com/ground-transportation/shuttles-taxis/" target="_blank" rel="noreferrer">Airport information <span>↗</span></a>
          </article>
          <article>
            <p className="card-number">03</p>
            <h3>Use rideshare</h3>
            <p>Uber, Lyft, or a hired car will be easiest for wedding events. A rental car is useful only if you plan to explore beyond Beverly Hills.</p>
            <span className="travel-fine-print">Exact arrival instructions will come with the invitation.</span>
          </article>
        </div>
        <div className="hotel-heading">
          <p className="eyebrow">Where to stay</p>
          <h3>Four places to compare.</h3>
          <p>Rates change by date, so compare the hotel’s direct rate before booking. Any room-block information will be added here.</p>
        </div>
        <div className="hotel-grid">
          {hotels.map((hotel, index) => (
            <article key={hotel.name}>
              <div className="hotel-topline"><span>{String(index + 1).padStart(2, '0')}</span><span>{hotel.label}</span></div>
              <h4>{hotel.name}</h4>
              <p className="hotel-address">{hotel.address}</p>
              <p>{hotel.description}</p>
              <a href={hotel.href} target="_blank" rel="noreferrer">View hotel <span>↗</span></a>
            </article>
          ))}
        </div>
      </section>

      <section className="guide-section" id="guide" aria-labelledby="guide-title">
        <div className="guide-heading">
          <div className="section-number">03</div>
          <p className="eyebrow">If you have a little time</p>
          <h2 id="guide-title">Nearby guide</h2>
          <p>A short list for coffee, dinner, a walk, or a quiet hour in the gardens.</p>
        </div>
        <div className="guide-list">
          {nearbyGuide.map((place, index) => (
            <a href={place.href} target="_blank" rel="noreferrer" key={place.name}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <div><small>{place.type}</small><h3>{place.name}</h3><p>{place.description}</p></div>
              <b aria-hidden="true">↗</b>
            </a>
          ))}
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
        <span>Dawnridge · Beverly Hills</span>
      </footer>
    </main>
    </PasswordGate>
  );
}

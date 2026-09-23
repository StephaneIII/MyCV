import TopBar from '../Components/TopBar';
import Footer from '../Components/Footer';

const skills = [
  ['Frontend-udvikling', 'HTML5, CSS3, JavaScript, TypeScript, JSX; React, Vue, Vite'],
  ['Backend & Database', 'C# (ASP.NET Core MVC), PHP; SQL, MySQL; REST API'],
  ['Udviklingsværktøjer & Metoder', 'Visual Studio Code, Visual Studio 2022; Git, GitHub, NPM; Scrum, Agile'],
  ['Systemer, Sikkerhed & Design', 'Ubuntu, Kali Linux; Metasploit; Figma; Unity'],
];

function Section({ title, children }) {
  return (
    <section className="cv-section mb-4">
      <h2>{title}</h2>
      {children}
    </section>
  );
}

function App() {
  return (
    <div>
      <TopBar />
      <main className="cv-page container-fluid">
        <div className="row g-5">
        <aside className="cv-sidebar col-lg-4 pe-lg-4">
          <Section title="Kort om mig">
            <p>Jeg brænder for IT og programmering og trives med at udvikle digitale løsninger, der skaber værdi for brugerne. Som person er jeg pålidelig, afbalanceret og seriøs.</p>
            <p>I min fritid holder jeg meget af strategibrætspil og skak og er medlem af Københavns Brætspilsklub og Valby Skakklub. Jeg sætter også stor pris på tid med familie og venner samt ture med min hund.</p>
          </Section>
          <dl className="contact-list mb-4">
            <div className="row g-0 mb-2"><dt className="col-sm-4 mb-0">Født</dt><dd className="col-sm-8 mb-0">3. sept. 2005</dd></div>
            <div className="row g-0 mb-2"><dt className="col-sm-4 mb-0">Kommune</dt><dd className="col-sm-8 mb-0">2500 Valby</dd></div>
            <div className="row g-0 mb-2"><dt className="col-sm-4 mb-0">Mobil</dt><dd className="col-sm-8 mb-0"><a href="tel:+4593840309">9384 0309</a></dd></div>
            <div className="row g-0 mb-2"><dt className="col-sm-4 mb-0">E-mail</dt><dd className="col-sm-8 mb-0"><a href="mailto:stk002@edu.zealand.dk">stk002@edu.zealand.dk</a></dd></div>
            <div className="row g-0 mb-2"><dt className="col-sm-4 mb-0">LinkedIn</dt><dd className="col-sm-8 mb-0"><a href="https://www.linkedin.com/in/st%C3%A9phane-karlsen-b5b84a291/" target="_blank" rel="noreferrer">Stephane Karlsen</a></dd></div>
            <div className="row g-0"><dt className="col-sm-4 mb-0">GitHub</dt><dd className="col-sm-8 mb-0"><a href="https://github.com/StephaneIII" target="_blank" rel="noreferrer">StephaneIII</a></dd></div>
          </dl>
          <Section title="Sprog og international baggrund">
            <div className="row g-2">
              <div className="col-12 col-xl-6"><p className="mb-0"><strong>Flydende i skrift og tale:</strong> dansk, engelsk</p></div>
              <div className="col-12 col-xl-6"><p className="mb-0"><strong>Modersmål:</strong> norsk, fransk</p></div>
              <div className="col-12 col-xl-6"><p className="mb-0"><strong>Samtaleniveau:</strong> tysk</p></div>
              <div className="col-12"><p className="mb-0">International baggrund med erfaring fra flere sproglige og kulturelle miljøer.</p></div>
            </div>  
          </Section>
        </aside>

        <div className="cv-main col-lg-8 ps-lg-4">
          <Section title="IT-kompetencer">
            <div className="skill-list row g-3">
              {skills.map(([title, description]) => (
                <div className="col-12" key={title}>
                  <p className="mb-0"><strong>{title}:</strong> {description} <span className="skill-level">[Superbrugerniveau]</span></p>
                </div>
              ))}
            </div>
          </Section>
          <Section title="Erhvervserfaring">
            <article className="timeline-item row g-3">
              <div className="col-12">
                <h3>Datamatikerpraktikant – Time2Give, København</h3>
                <p className="timeline-date mb-0">Efterår 2025</p>
              </div>
              <div className="col-12">
                <ul className="mb-0">
                  <li>Udvikling af webfunktioner med <strong>C#, .NET Core, JavaScript, HTML og CSS</strong></li>
                  <li>Arbejde med MS SQL, databaser og datahåndtering</li>
                  <li>Udvikling af dashboard og interaktive grafer samt integration med Strava API</li>
                  <li>Integration med Nationalbankens API og udvikling efter konkrete forretningsbehov</li>
                </ul>
              </div>
            </article>
          </Section>
          <Section title="Uddannelse">
            <div className="education-grid row row-cols-1 g-3">
              <article className="education-item col"><h3>Top-up Bachelor i Webudvikling, Zealand</h3><p>Erhvervsakademi Roskilde · Jan. 2026 – juni 2027</p><p>Praksisorienteret og erhvervsrettet uddannelse med fokus på webapplikationer, softwarearkitektur og avanceret webudvikling.</p></article>
              <article className="education-item col"><h3>Datamatiker, Zealand Erhvervsakademi Roskilde</h3><p>Sept. 2023 – Jan. 2026</p></article>
              <article className="education-item col"><h3>Fransk-Dansk Baccalauréat 2023</h3><p>Prins Henriks Skole i Frederiksberg · Specialefag: Matematik, fysik og kemi</p></article>
            </div>
          </Section>
          <Section title="Referencer"><div className="row"><p className="col-12 mb-0">Haves og gives efter aftale.</p></div></Section>
        </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;

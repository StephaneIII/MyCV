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
      <main className="cv-page w-full">
        <div className="grid gap-12 lg:grid-cols-12">
        <aside className="cv-sidebar lg:col-span-4 lg:pr-10">
          <Section title="Kort om mig">
            <p>Jeg brænder for IT og programmering og trives med at udvikle digitale løsninger, der skaber værdi for brugerne. Som person er jeg pålidelig, afbalanceret og seriøs.</p>
            <p>I min fritid holder jeg meget af strategibrætspil og skak og er medlem af Københavns Brætspilsklub og Valby Skakklub. Jeg sætter også stor pris på tid med familie og venner samt ture med min hund.</p>
          </Section>
          <dl className="contact-list mb-4">
            <div className="mb-2 grid grid-cols-[minmax(0,4fr)_minmax(0,8fr)]"><dt>Født</dt><dd>3. sept. 2005</dd></div>
            <div className="mb-2 grid grid-cols-[minmax(0,4fr)_minmax(0,8fr)]"><dt>Kommune</dt><dd>2500 Valby</dd></div>
            <div className="mb-2 grid grid-cols-[minmax(0,4fr)_minmax(0,8fr)]"><dt>Mobil</dt><dd><a href="tel:+4593840309">9384 0309</a></dd></div>
            <div className="mb-2 grid grid-cols-[minmax(0,4fr)_minmax(0,8fr)]"><dt>E-mail</dt><dd><a href="mailto:stk002@edu.zealand.dk">stk002@edu.zealand.dk</a></dd></div>
            <div className="mb-2 grid grid-cols-[minmax(0,4fr)_minmax(0,8fr)]"><dt>LinkedIn</dt><dd><a href="https://www.linkedin.com/in/st%C3%A9phane-karlsen-b5b84a291/" target="_blank" rel="noreferrer">Stephane Karlsen</a></dd></div>
            <div className="grid grid-cols-[minmax(0,4fr)_minmax(0,8fr)]"><dt>GitHub</dt><dd><a href="https://github.com/StephaneIII" target="_blank" rel="noreferrer">StephaneIII</a></dd></div>
          </dl>
          <Section title="Sprog og international baggrund">
            <div className="grid gap-2 xl:grid-cols-2">
              <div><p className="mb-0"><strong>Flydende i skrift og tale:</strong> dansk, engelsk</p></div>
              <div><p className="mb-0"><strong>Modersmål:</strong> norsk, fransk</p></div>
              <div><p className="mb-0"><strong>Samtaleniveau:</strong> tysk</p></div>
              <div className="xl:col-span-2"><p className="mb-0">International baggrund med erfaring fra flere sproglige og kulturelle miljøer.</p></div>
            </div>  
          </Section>
        </aside>

        <div className="cv-main lg:col-span-8 lg:pl-4">
          <Section title="IT-kompetencer">
            <div className="skill-list grid gap-3">
              {skills.map(([title, description]) => (
                <div key={title}>
                  <p className="mb-0"><strong>{title}:</strong> {description} <span className="skill-level">[Superbrugerniveau]</span></p>
                </div>
              ))}
            </div>
          </Section>
          <Section title="Erhvervserfaring">
            <article className="timeline-item grid gap-3">
              <div>
                <h3>Datamatikerpraktikant – Time2Give, København</h3>
                <p className="timeline-date mb-0">Efterår 2025</p>
              </div>
              <div>
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
            <div className="education-grid grid gap-3">
              <article className="education-item"><h3>Top-up Bachelor i Webudvikling, Zealand</h3><p>Erhvervsakademi Roskilde · Jan. 2026 – juni 2027</p><p>Praksisorienteret og erhvervsrettet uddannelse med fokus på webapplikationer, softwarearkitektur og avanceret webudvikling.</p></article>
              <article className="education-item"><h3>Datamatiker, Zealand Erhvervsakademi Roskilde</h3><p>Sept. 2023 – Jan. 2026</p></article>
              <article className="education-item"><h3>Fransk-Dansk Baccalauréat 2023</h3><p>Prins Henriks Skole i Frederiksberg · Specialefag: Matematik, fysik og kemi</p></article>
            </div>
          </Section>
          <Section title="Referencer"><p className="mb-0">Haves og gives efter aftale.</p></Section>
        </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;

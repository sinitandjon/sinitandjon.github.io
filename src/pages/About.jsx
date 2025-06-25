export default function About() {
  return (
    <main className="max-w-4xl mx-auto p-8 space-y-8">
      <section>
        <h1 className="text-4xl font-bold mb-4">About Me</h1>
        <p className="text-lg">
          Hi, I’m Djon Yeo. I am currently a Telecom Engineer student specializing in AI at Telecom Paris, with a
          strong background from École Polytechnique. Passionate about AI, data science, and software development.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">Contact</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Email: <a href="mailto:djon.yeo@telecom-paris.fr" className="text-blue-600 hover:underline">djon.yeo@telecom-paris.fr</a></li>
          <li>Phone: +33 7 84 76 59 95</li>
          <li>Address: 8 rue Jean François de Pérouse, Massy 91300</li>
          <li><a href="https://linkedin.com/in/yourprofile" className="text-blue-600 hover:underline" target="_blank" rel="noreferrer">LinkedIn Profile</a></li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">Education</h2>
        <ul className="space-y-4">
          <li>
            <strong>Telecom Paris, Palaiseau Cedex</strong> (Sep 2023 – Present)<br />
            Telecom Engineer Program, AI Option (3rd Year)<br />
            Relevant Coursework: Deep Learning, Symbolic AI, Graph Learning, Data Visualization, Databases, Data Economics
          </li>
          <li>
            <strong>École Polytechnique, Palaiseau Cedex</strong> (Oct 2020 – Aug 2023)<br />
            Cycle Ingénieur Polytechnicien<br />
            Relevant Coursework: Advanced Statistics, Random Phenomena Modeling, C++ for Data Analysis, Optimization, Machine Learning, Sociology of Big Data
          </li>
          <li>
            <strong>INP-HB, Yamoussoukro</strong> (Sep 2018 – Aug 2020)<br />
            Classe Préparatoire Maths–Physique
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">Experience</h2>
        <ul className="space-y-4 list-disc list-inside">
          <li>
            <strong>Polynom, Paris — R&D Researcher</strong> (Feb – Sep 2025)<br />
            • Presented weekly AI research paper reviews.<br />
            • Developed LLM-based fashion image attribute extraction.<br />
            • Built semantic product search engine with LLMs.<br />
            • Implemented dynamic pricing API with gRPC.
          </li>
          <li>
            <strong>IRT SystemX, Paris — AI Intern</strong> (Apr – Sep 2023)<br />
            • Developed tourism recommendation system with exploration strategies.<br />
            • Addressed cold-start problem with synthetic user data.<br />
            • Co-authored IEEE paper (SysCon 2024).
          </li>
          <li>
            <strong>N01ZET, Paris — Data Science Intern</strong> (Jun – Aug 2022)<br />
            • Designed data pipeline and dashboard for N01ZET index.<br />
            • Started prediction models development.
          </li>
          <li>
            <strong>INP-HB, Yamoussoukro — Tutor / Khôlleur</strong> (Oct – Dec 2020)<br />
            • Delivered tutorials in maths and physics.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">Projects</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Drone Development with Paris Fire Brigade for hazardous terrain navigation.</li>
          <li>Wildfire Forecasting US project using environmental data.</li>
          <li>Enterprise Search Optimization by integrating LLM.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">Skills & Languages</h2>
        <p>React.js, Python, Java, C++, JavaScript</p>
        <p>Languages: French (Fluent), English (Proficient), Arabic (Basic)</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">Hobbies</h2>
        <p>Artificial Intelligence, Robotics, Football, Boxing (Paris Regional Heavyweight Finalist 2022)</p>
      </section>
    </main>
  );
}

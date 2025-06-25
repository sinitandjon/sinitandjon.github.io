export default function Experience() {
  return (
    <main className="max-w-4xl mx-auto p-8 space-y-6">
      <h1 className="text-4xl font-bold mb-4">Experience</h1>

      <section>
        <h2 className="text-2xl font-semibold">Polynom – R&D Researcher</h2>
        <p className="text-gray-700">Feb – Sep 2025</p>
        <ul className="list-disc list-inside">
          <li>Presented weekly reviews of AI research papers.</li>
          <li>Developed an LLM-based fashion image classification tool.</li>
          <li>Built a semantic search engine using LLMs.</li>
          <li>Created a dynamic pricing API with gRPC.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">IRT SystemX – AI Intern</h2>
        <p className="text-gray-700">Apr – Sep 2023</p>
        <ul className="list-disc list-inside">
          <li>Designed a tourism recommender system.</li>
          <li>Simulated user data for cold-start scenarios.</li>
          <li>Published paper in IEEE SysCon 2024.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">N01ZET – Data Science Intern</h2>
        <p className="text-gray-700">Jun – Aug 2022</p>
        <ul className="list-disc list-inside">
          <li>Designed data pipeline and dashboard.</li>
          <li>Initiated prediction model development.</li>
        </ul>
      </section>
    </main>
  );
}

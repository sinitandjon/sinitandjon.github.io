export default function Publications() {
  return (
    <main className="max-w-4xl mx-auto p-8 space-y-6">
      <h1 className="text-4xl font-bold mb-4">Publications</h1>

      <article className="bg-gray-100 p-4 rounded-lg">
        <h2 className="text-xl font-semibold">
          Enhancing Cold-Start Recommendations through Synthetic User Data and Exploration Strategies
        </h2>
        <p className="text-gray-700">Published in IEEE SysCon 2024</p>
        <p>
          Co-authored during internship at IRT SystemX. Access the publication:{" "}
          <a
            href="https://hal.science/hal-04554762"
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            hal.science/hal-04554762
          </a>
        </p>
      </article>
    </main>
  );
}

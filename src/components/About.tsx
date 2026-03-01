export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-4 bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">
          About Me
        </h2>
        <div className="w-16 h-1 bg-indigo-600 rounded mb-10" />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="space-y-5 text-gray-600 dark:text-gray-400 leading-relaxed">
            <p>
              I&apos;m a passionate software engineer with a love for crafting
              elegant solutions to complex problems. I thrive at the intersection
              of great design and robust engineering.
            </p>
            <p>
              When I&apos;m not coding, you can find me hiking or spending time outdoors, reading about distributed systems, or experimenting with
              new frameworks and tools.
            </p>
            <p>
              I hold a degree in Computer Science and have experience working
              across the full stack — from designing REST APIs and microservices
              to building pixel-perfect React UIs.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-600 text-white rounded-lg font-semibold text-sm hover:bg-indigo-700 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                </svg>
                Download Résumé
              </a>
            </div>
          </div>

          {/* Stats / quick facts */}
          <div className="grid grid-cols-2 gap-6">
            {[
              { label: "Years of Experience", value: "6+" },
              { label: "Projects Shipped", value: "20+" },
              { label: "Technologies", value: "15+" },
              { label: "Coffee / Day", value: "∞" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm text-center"
              >
                <p className="text-4xl font-extrabold text-indigo-600 dark:text-indigo-400 mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

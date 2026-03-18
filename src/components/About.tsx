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

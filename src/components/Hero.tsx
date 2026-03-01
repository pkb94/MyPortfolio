export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center px-4 pt-16 bg-white dark:bg-gray-950"
    >
      <div className="max-w-3xl mx-auto">
        <p className="text-indigo-600 dark:text-indigo-400 font-semibold mb-3 tracking-widest uppercase text-sm">
          Hi, I&apos;m
        </p>
        <h1 className="text-5xl sm:text-7xl font-extrabold text-gray-900 dark:text-white mb-4 leading-tight">
          Pooja Kittanakere Balaji
        </h1>
        <h2 className="text-2xl sm:text-3xl font-semibold text-indigo-600 dark:text-indigo-400 mb-6">
          Software Engineer
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto mb-10">
          I build fast, accessible, and beautiful web applications — from
          thoughtful UIs to scalable backends.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="#projects"
            className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
          >
            View My Work
          </a>
          <a
            href="#about"
            className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            About Me
          </a>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 animate-bounce text-gray-400 dark:text-gray-600">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}

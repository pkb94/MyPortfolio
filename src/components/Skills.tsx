const skillsData = [
  {
    category: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "C#/.NET", "Python", "REST APIs", "GraphQL", "WebSockets"],
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "SQLite", "Oracle DB"],
  },
  {
    category: "Infrastructure & DevOps",
    skills: ["Docker", "Azure", "GitHub Actions", "Terraform"],
  },
  {
    category: "Tools & Practices",
    skills: ["Git", "Linux", "Agile/Scrum", "TDD", "System Design", "Postman", "Jira", "Dynatrace", "CI/CD"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 px-4 bg-white dark:bg-gray-950"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">
          Skills &amp; Tech Stack
        </h2>
        <div className="w-16 h-1 bg-indigo-600 rounded mb-10" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((group) => (
            <div
              key={group.category}
              className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 shadow-sm"
            >
              <h3 className="text-base font-bold text-indigo-600 dark:text-indigo-400 mb-4 uppercase tracking-wider text-sm">
                {group.category}
              </h3>
              <ul className="space-y-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-2 text-gray-700 dark:text-gray-300 text-sm"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400 shrink-0" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

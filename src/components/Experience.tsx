interface Job {
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
  tech: string[];
}

const experience: Job[] = [
  {
    company: "STERIS",
    role: "Associate Applications Analyst",
    period: "August 2022 – Present",
    location: "Mentor, Ohio",
    bullets: [
     "Full-stack developer delivering end-to-end enterprise web solutions with React, .NET/C#, and Azure—modernized legacy services, built CI/CD pipelines, and partnered with business teams to improve performance, reliability, and cost efficiency.",
    ],
    tech: ["TypeScript", "React", "Node.js", "C#/.NET", "MySQL/Oracle DB", "Azure", "Azure DevOps", "Python"],
  },
  {
    company: "Siemens Corporation",
    role: "Design Systems and simulation Engineer",
    period: "Jun 2021 – Dec 2021",
    location: "Princeton, NJ",
    bullets: [
      "Built and delivered high-impact full-stack features using React and JavaScript, achieving a 10× performance improvement for core user workflows. Created a Dockerized MongoDB POC with MQTT for containerized data ingestion, and implemented CI/CD pipelines with Azure DevOps dashboards to improve deployment reliability, visibility, and system monitoring.",
      "Implemented CI/CD pipelines with GitHub Actions and Docker.",
      "Developed a real-time mock UI for the Vision Connector app using AngularJS and socket programming to enable live image streaming and improve user interaction."
    ],
    tech: ["ReactJS", "Docker", "JavaScript", "Azure DevOps", "MQTT"],
  },
  {
    company: "Siemens Healthineers",
    role: "Associate Software Engineer",
    period: "Aug 2016 – May 2020",
    location: "Bangalore, India",
    bullets: [
      "Designed and documented a new software process in Visio for creating ISO images on an ultrasound imaging system in a WinPE environment, using C# and PowerShell to automate steps and cut processing time by 50%.",
      "Wrote Python scripts to automate data cleaning, saving 10 hrs/week.",
      "Designed and implemented healthcare system integrations by connecting ASP.NET applications with SQL Server/Oracle and applying PACS/RIS integration patterns for radiology workflows.",
    ],
    tech: ["Python", "D3.js", "Flask", "NumPy"],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 px-4 bg-white dark:bg-gray-950"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">
          Experience
        </h2>
        <div className="w-16 h-1 bg-indigo-600 rounded mb-10" />

        <div className="relative border-l-2 border-indigo-200 dark:border-indigo-900 pl-8 space-y-12">
          {experience.map((job, i) => (
            <div key={i} className="relative">
              {/* Timeline dot */}
              <span className="absolute -left-[2.6rem] top-1 w-4 h-4 rounded-full bg-indigo-600 border-2 border-white dark:border-gray-950 shadow" />

              <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 shadow-sm">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      {job.role}
                    </h3>
                    <p className="text-indigo-600 dark:text-indigo-400 font-semibold">
                      {job.company}
                    </p>
                  </div>
                  <div className="text-right text-sm text-gray-500 dark:text-gray-400">
                    <p>{job.period}</p>
                    <p>{job.location}</p>
                  </div>
                </div>

                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400 text-sm mb-4">
                  {job.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {job.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-0.5 bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 text-xs rounded-full font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


type JobExperience = {
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate?: string;
  description: string;
}

const jobExperiences: JobExperience[] = [
  {
    role: "Junior Fullstack Engineer",
    company: "Huspy",
    location: "Madrid, Spain",
    startDate: "Apr. 2024",
    endDate: "Present",
    description:
      "At Huspy, a leading proptech revolutionizing the property market, I contribute to both frontend and backend development for their real estate super app. I built the Agents Web Platform and Client Lounge using React, Next.js, and TypeScript, and developed a cross-platform mobile marketplace with React Native and Expo. I also design scalable microservices using Kotlin, Spring Boot, and Kafka.",
  },
  {
    role: "Software Developer Intern",
    company: "Guidewire Software",
    location: "Madrid, Spain",
    startDate: "Jun. 2022",
    endDate: "Sep. 2022",
    description:
      "During my internship, I developed a Smartsheet application to automate the partner hiring process, streamlining operations and improving data quality. I also migrated legacy data and automated analytics reports with visual charts and graphs. Working in a SCRUM environment, I collaborated in daily stand-ups and produced thorough documentation for smooth adoption of the new tools.",
  },
];

function Work() {
  return (
    <section id="work" className="py-10">
    <div className="max-w-xl mx-auto px-4">
      <h2 className="text-2xl font-bold mb-6 text-center">Work Experience</h2>
      <div className="relative border-l border-gray-200 dark:border-gray-700">
        {jobExperiences.map((job, index) => (
          <div key={index} className="mb-10 ml-6">
            <span className="absolute flex items-center justify-center w-4 h-4 rounded-full -left-2 mt-1 ring-8 ring-white dark:ring-gray-800 dark:bg-gray-700">
              <svg
                className="w-3 h-3 text-gray-600 dark:text-gray-300"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-11h2v4H9V7zm0 6h2v2H9v-2z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              {job.role} @ {job.company}
            </h3>
            <time className="block mb-2 text-sm font-normal text-gray-400 dark:text-gray-500">
              {job.startDate} – {job.endDate} · {job.location}
            </time>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              {job.description}
            </p>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
}

export { Work };

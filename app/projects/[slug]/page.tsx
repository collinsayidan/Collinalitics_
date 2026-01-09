import Reveal from "@/app/components/Reveal";
import ScrollProgress from "@/app/components/ScrollProgress";
import { projectData, projectSlugs, ProjectSlug } from "../projectData";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: ProjectSlug }>;
}) {
  const { slug } = await params;
  const project = projectData[slug];

  if (!project) {
    return {
      title: "Project Not Found | Collinalitics",
      description: "This project does not exist.",
    };
  }

  return {
    title: `${project.title} | Collinalitics`,
    description: project.description.slice(0, 150),
    openGraph: {
      title: project.title,
      description: project.description.slice(0, 150),
      images: [
        {
          url: project.image,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: ProjectSlug }>;
}) {
  const { slug } = await params;
  const project = projectData[slug];

  const index = projectSlugs.indexOf(slug);
  const prev = projectSlugs[index - 1];
  const next = projectSlugs[index + 1];

  // 404 fallback
  if (!project) {
    return (
      <section className="px-6 py-20 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-red-600">Project not found</h1>
        <p className="mt-4 text-gray-600">
          The project you are looking for does not exist or has been removed.
        </p>
      </section>
    );
  }

  return (
    <>
      <ScrollProgress />

      <section className="px-4 sm:px-6 py-12 sm:py-20 max-w-4xl mx-auto">
        <Reveal>

    {/* Breadcrumbs */}
    <div className="text-xs sm:text-sm text-gray-500 mb-4 sm:mb-6 flex flex-wrap gap-1">
      <a href="/" className="hover:underline">Home</a>
      <span>/</span>
      <a href="/#projects" className="hover:underline">Projects</a>
      <span>/</span>
      <span className="text-gray-700 font-medium">{project.title}</span>
    </div>

    {/* Hero Image */}
    <img
      src={project.image}
      alt={project.title}
      className="w-full h-48 sm:h-72 md:h-96 object-cover rounded-xl mb-8 sm:mb-10"
    />

    {/* Title */}
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
      {project.title}
    </h1>

    {/* PDF Download Button */}
    <a
      href={`/api/pdf/${slug}`}
      className="inline-block mt-5 sm:mt-6 px-5 sm:px-6 py-3 rounded-xl 
                 bg-gradient-to-r from-blue-600 to-purple-600 text-white 
                 font-medium shadow-lg hover:opacity-90 transition text-sm sm:text-base"
    >
      Download Case Study (PDF)
    </a>

    {/* Tech Stack */}
    <div className="flex flex-wrap gap-2 mt-4">
      {project.tech.map((t) => (
        <span
          key={t}
          className="px-3 py-1 text-xs sm:text-sm bg-blue-100 text-blue-700 rounded-full"
        >
          {t}
        </span>
      ))}
    </div>

    {/* Description */}
    <p className="mt-6 text-gray-700 leading-relaxed whitespace-pre-line text-sm sm:text-base">
      {project.description}
    </p>

    {/* Gallery */}
    {project.gallery && (
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {project.gallery.map((img) => (
          <img
            key={img}
            src={img}
            alt="Gallery image"
            className="rounded-lg shadow-sm hover:shadow-lg transition"
          />
        ))}
      </div>
    )}

    {/* Navigation */}
    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-14 sm:mt-16">
      {prev ? (
        <a
          href={`/projects/${prev}`}
          className="text-blue-600 hover:underline font-medium text-sm sm:text-base"
        >
          ← Previous Project
        </a>
      ) : (
        <div />
      )}

      {next ? (
        <a
          href={`/projects/${next}`}
          className="text-blue-600 hover:underline font-medium text-sm sm:text-base"
        >
          Next Project →
        </a>
      ) : (
        <div />
      )}
    </div>

  </Reveal>
</section>

    </>
  );
}

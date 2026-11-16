import { ImageResponse } from "next/og";
import { notFound } from "next/navigation";
import { getProjectBySlug } from "../../../../data/projects";
import ProjectOpenGraph from "../../../../components/og/ProjectOpenGraph";

type ImageProps = { params: Promise<{ slug: string }> };

export const alt = "Project by Luka Shvelidze";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({ params }: ImageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return new ImageResponse(
    <ProjectOpenGraph
      label="PROJECT"
      title={project.name.en}
      subtitle={project.title.en}
    />,
    size,
  );
}

import { ImageResponse } from "next/og";
import ProjectOpenGraph from "../../../components/og/ProjectOpenGraph";

export const alt = "Selected projects by Luka Shvelidze";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <ProjectOpenGraph
      label="PROJECTS"
      title="Selected Projects"
      subtitle="Web experiences built with care, from concept to launch."
    />,
    size,
  );
}

import { ImageResponse } from "next/og";
import { headers } from "next/headers";
import ProjectOpenGraph from "../../../components/og/ProjectOpenGraph";
import { getSiteHostname } from "../../../lib/site";

export const alt = "Selected projects by Luka Shvelidze";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const hostname = getSiteHostname((await headers()).get("host"));

  return new ImageResponse(
    <ProjectOpenGraph
      label={hostname}
      title="Selected Projects"
      subtitle="Web experiences built with care, from concept to launch."
    />,
    size,
  );
}

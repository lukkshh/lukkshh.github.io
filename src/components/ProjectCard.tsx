import { GitHubIcon, LinkIcon } from "./Icons";
import parse from "html-react-parser";
import Badge from "./Badge";

export interface ProjectData {
  img: string;
  title: string;
  description: string;
  ghLink: string;
  webLink: string;
  badges: string[];
}

const ProjectCard = ({ data }: { data: ProjectData }) => {
  return (
    <div className="w-[380px] min-h-[330px] max-sm:w-[350px] bg-zinc-900 rounded-xl">
      <div className="flex justify-center items-center">
        <img
          className="h-[190px] w-[300px] p-2 rounded-3xl object-cover"
          src={data.img}
          alt={data.img}
        />
      </div>

      {parse(data.title)}

      <a
        target="_blank"
        href={data.ghLink}
        className="text-base ml-4 flex mb-[2px] items-center hover:underline transition-all text-zinc-400"
      >
        <GitHubIcon /> Github Repository
      </a>
      {data.webLink ? (
        <a
          target="_blank"
          href={data.webLink}
          className="text-base ml-4 flex items-center hover:underline transition-all text-zinc-400"
        >
          <LinkIcon /> Live Website
        </a>
      ) : (
        ""
      )}

      <div className="w-full pl-2 pr-2 mt-2 mb-4 space-y-2">
        {data.badges.map((badge, index) => (
          <Badge key={index}>{badge}</Badge>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;

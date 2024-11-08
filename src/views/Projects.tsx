import { GitHubIcon, LinkIcon } from "../components/Icons";
import Badge from "../components/Badge";

const Projects = () => {
  return (
    <section className="w-full flex flex-col justify-center items-center text-white max-lg:p-2">
      <div className="grid grid-cols-3 gap-16 mt-12 mb-12 max-sm:grid-cols-1 max-lg:grid-cols-2 ">
        <div className="w-[380px] h-[330px] max-sm:w-[350px] bg-zinc-900 rounded-xl">
          <div className="flex justify-center items-center">
            <img
              className="h-[190px] w-[300px] p-2 rounded-3xl object-fit"
              src="/images/ecommerce.png"
              alt="E-Commerce"
            />
          </div>
          <p className="text-lg ml-4 mb-2">E-Commerce Website</p>
          <a
            target="_blank"
            href="https://github.com/lukkshh/scandiweb"
            className="text-base ml-4 flex mb-[2px] items-center hover:underline transition-all text-zinc-400"
          >
            <GitHubIcon /> Github Repository
          </a>
          <a
            target="_blank"
            href="https://lukkshh-scandiweb.ct.ws/"
            className="text-base ml-4 flex items-center hover:underline transition-all text-zinc-400"
          >
            <LinkIcon /> Live Website
          </a>
          <div className="w-full pl-2 pr-2 mt-2 space-y-2">
            <Badge>React</Badge>
            <Badge>PHP</Badge>
            <Badge>MySQL</Badge>
            <Badge>TailwindCSS</Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

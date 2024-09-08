import Technologies from "../components/Technologies";
import Education from "../components/Education";
import Profile from "../components/Profile";
import Contact from "../components/Contact";
import About from "../components/About";
import Links from "../components/Links";

const Home = (): JSX.Element => {
  return (
    <section className="text-white w-full h-[92vh] flex justify-center items-center max-sm:h-[95dvh]">
      <div className="w-[55%] h-[95%] max-sm:w-[98%] max-sm:h-full max-md:w-[90%] max-lg:w-[95%]">
        <div className="w-full h-[33%] flex justify-center items-center max-sm:p-2 max-sm:h-[27%]">
          <div className="bg-zinc-900 flex-[2] m-2 h-[90%] rounded-xl max-sm:flex-none max-sm:w-[35%]">
            <About />
          </div>
          <div className="bg-zinc-900 flex-1 h-[90%] m-2 rounded-xl max-sm:flex-none max-sm:w-[65%]">
            <Contact />
          </div>
        </div>
        <div className="w-full h-[66%] flex justify-center items-center max-sm:h-[73%]">
          <div className="flex-1 h-full p-2 max-sm:p-0 max-sm:pr-2 max-sm:pb-4">
            <div className="bg-zinc-900 w-full h-full rounded-xl">
              <Technologies />
            </div>
          </div>
          <div className="flex-1 h-full flex flex-col justify-center items-center p-2 max-sm:hidden">
            <div className="bg-zinc-900 w-full h-[60%] rounded-xl ">
              <Profile />
            </div>
            <div className="bg-zinc-900 w-full h-[50%] mt-4 rounded-xl">
              <Links />
            </div>
          </div>
          <div className="flex-1 h-full p-2 max-sm:p-0 max-sm:pl-2 max-sm:pb-4">
            <div className="bg-zinc-900 w-full h-full rounded-xl">
              <Education />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

import { GitHub, Facebook, Instagram, LinkedIn } from "@mui/icons-material";

const Socials = () => {
  return (
    <div className="mt-6 flex space-x-4 items-center max-md:mt-4 max-md:ml-4">
      <a
        href="https://github.com/lukkshh/"
        className="hover:text-red-600 transition-all"
        target="_blank"
      >
        <GitHub fontSize="large" />
      </a>
      <a
        href="https://instagram.com/lukkshh"
        className="hover:text-red-600 transition-all"
        target="_blank"
      >
        <Instagram fontSize="large" />
      </a>
      <a
        href="https://www.facebook.com/lukkshh"
        className="hover:text-red-600 transition-all"
        target="_blank"
      >
        <Facebook fontSize="large" />
      </a>
      <a
        href="https://www.linkedin.com/in/lukkshh"
        className="hover:text-red-600 transition-all"
        target="_blank"
      >
        <LinkedIn fontSize="large" />
      </a>
    </div>
  );
};

export default Socials;

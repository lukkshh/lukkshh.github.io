import "../style/Certificates.css";

const Certificates = () => {
  return (
    <section className="bcl bc  w-full h-screen flex justify-center items-center flex-col">
      <div className="w-full h-[25%] flex justify-center items-end max-md:items-center">
        <p className="text-3xl text-white font-bold tracking-wider">
          CERTIFICATES
        </p>
      </div>
      <div className="w-full h-[75%] flex justify-around items-center max-md:mt-4 max-md:flex-col">
        <a
          href="certificates/UC-51dace1f-4ca4-4ee9-9d74-049c053d75a5.pdf"
          className="w-[30%] h-[70%] max-md:w-[90%]"
        >
          <img
            data-aos="zoom-in-right"
            className="w-full h-5/6 object-fit rounded-3xl c"
            src="images/UC-51dace1f-4ca4-4ee9-9d74-049c053d75a5.jpg"
            alt="certificate"
          />
        </a>
        <a
          href="certificates/youaccel.pdf"
          className="w-[30%] h-[70%] max-md:w-[90%]"
        >
          <img
            data-aos="zoom-in-left"
            className="w-full h-5/6 object-fit rounded-3xl c"
            src="images/youaccel.png"
            alt="certificate"
          />
        </a>
      </div>
    </section>
  );
};

export default Certificates;

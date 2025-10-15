export default function Card() {
  return (
    <div className="min-w-[600px] min-h-[618px] drop-shadow-sm border-[0.1px] border-[#36374942] px-6 py-9  rounded-3xl bg-gradient-to-bl from-[#0C0E23] to-[#04071D] ">
      <div className="bg-[url(/images/card_img_background.svg)] drop-shadow-sm flex justify-center items-end min-w-[552px] min-h-[330px] rounded-xl overflow-hidden bg-[#13162D]">
        <img
          className="w-[450px] h-[320px] rotate-2 translate-y-8 rounded-lg object-cover"
          src="/images/rpc.png"
          alt=""
        />
      </div>
      <p className="mt-9 text-3xl max-w-[552px] font-bold text-white">
        Lorem ipsum dolor sit ame.
      </p>
      <p className="mt-4 text-xl max-w-[552px] text-[#BEC1DD]">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi illo
        ipsam, officiis eum ipsa repellendus!
      </p>
      <div className="mt-6 max-w-[552px]">
        <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-[#FF8A00] to-[#E52E71] text-white font-semibold">
          View Project
        </button>
      </div>
    </div>
  );
}

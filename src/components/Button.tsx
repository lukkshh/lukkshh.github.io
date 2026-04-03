import BorderGlow from "./BorderGlow";

export default function Button({
  children,
  className,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <BorderGlow
      className="h-full"
      edgeSensitivity={40}
      glowColor="200 95 72"
      backgroundColor="#060010"
      borderRadius={8}
      glowRadius={20}
      glowIntensity={1.5}
      coneSpread={20}
      animated={true}
      colors={["#06b6d4", "#3b82f6", "#6366f1"]}
    >
      <button
        onClick={onClick}
        className={` ${className} text-white drop-shadow-sm rounded-lg border-[0.5px] border-[#3637498a] bg-gradient-to-tl from-[#06091F] to-[#161A31]`}
      >
        {children}
      </button>
    </BorderGlow>
  );
}

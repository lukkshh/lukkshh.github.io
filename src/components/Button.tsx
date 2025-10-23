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
    <button
      onClick={onClick}
      className={` ${className} text-white drop-shadow-sm rounded-lg border-[0.5px] border-[#3637498a] bg-gradient-to-tl from-[#06091F] to-[#161A31]`}
    >
      {children}
    </button>
  );
}

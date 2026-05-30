import Link from 'next/link';

export default function SiteLogo() {
  return (
    <Link href="/" className="flex items-center gap-1.5 select-none mr-8">
      {/* Metallic gold dollar sign */}
      <svg viewBox="0 0 32 40" className="w-7 h-8 flex-shrink-0" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="gold" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#C9A030" />
            <stop offset="30%" stopColor="#F2D064" />
            <stop offset="50%" stopColor="#FFF8C0" />
            <stop offset="70%" stopColor="#E8B840" />
            <stop offset="100%" stopColor="#A07820" />
          </linearGradient>
        </defs>
        <text x="2" y="34" fontSize="36" fontWeight="900" fill="url(#gold)" fontFamily="serif">$</text>
      </svg>
      <div className="flex flex-col leading-tight">
        <span className="text-[20px] font-black text-gray-900 tracking-tight leading-none">Calculator</span>
        <span className="text-[10px] font-medium text-gray-400 tracking-wide leading-none">Financial &amp; Tax</span>
      </div>
    </Link>
  );
}

// components/Navbar.tsx

import Image from "next/image";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className="w-full bg-gradient-to-b from-slate-800 to-primary text-white h-[80px] flex items-center shadow-xl shadow-black/60">
      <div className="max-w-7xl mx-auto flex justify-between w-full p-8 items-center">
        {/* Left Side - Logo and Title */}
        <div className="flex items-center justify-center gap-6">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logos/logo.png"
              alt="Logo"
              width={50}
              height={40}
              className="object-contain"
              priority
            />
          </Link>
          <h2 className="text-white text-xl font-bold">Cactus Clash</h2>
        </div>

        {/* Right Side - Developer Link */}
        <Link
          href="https://wendling.io"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white px-4 py-2 rounded-md  border-[2px] border-white h-[40px] flex items-center font-semibold text-md hover:text-blue-50 hover:border-blue-500 hover:bg-blue-500/20"
        >
          Developer
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

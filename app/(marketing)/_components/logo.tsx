import { Poppins } from "next/font/google";
import Image from "next/image";

import { cn } from "@/lib/utils";

// font
const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const Logo = () => {
  return (
    <div className="hidden md:flex items-center gap-x-2">
      <Image
        src="/logo.svg"
        height="40"
        width="40"
        alt="logo"
        className="hidden"
      />
      <Image
        src="/logo-dark.svg"
        height="40"
        width="40"
        alt="logo"
        className="hidden dark:block"
      />
      {/* apply the poppins font to the "Jotion" */}
      <p className={cn("font-semibold", font.className)}>Jotion</p>
    </div>
  );
};

export default Logo;

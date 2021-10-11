import Link from "next/link";
import { useState } from "react";
import cn from "classnames";
import Image from "next/image";

export default function Header() {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  return (
    <header className="bg-transparent h-10 mb-3 mt-0 w-screen z-50">
      <div className="flex fixed top-0 justify-between mt-2 mb-2 px-2 text-black h-full w-full z-50">
        <div><Link href="/">Back</Link></div>
        <div className="scania_heading mix-blend-difference">ARCHIVE®</div>
        <div>Menu</div>
      </div>
    </header>
  );
}

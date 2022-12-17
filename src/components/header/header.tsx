import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Header = () => {
  const router = useRouter();
  return (
    <header>
      <div>
        <nav className="topNav">
          <ul>
            <li className={router.pathname === "/" ? "active" : ""}>
              <Link href="/" passHref>
                Home
              </Link>
            </li>
            <li className={router.pathname === "/about-me" ? "active" : ""}>
              <Link href="/about-me" passHref>
                About
              </Link>
            </li>
            <li className={router.pathname === "/projects" ? "active" : ""}>
              <Link href="/projects" passHref>
                Projects
              </Link>
            </li>
            <li className={router.pathname === "/contact" ? "active" : ""}>
              <Link href="/contact" passHref>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

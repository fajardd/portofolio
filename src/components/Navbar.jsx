import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [navbarSolid, setNavbarSolid] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const isSolid = scrollPosition > 0; // Atur ke true jika scrollPosition lebih dari 0

      setNavbarSolid(isSolid);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMouseEnter = () => {
    setNavbarSolid(true);
  };

  const handleMouseLeave = () => {
    const scrollPosition = window.scrollY;
    const isSolid = scrollPosition > 0;

    setNavbarSolid(isSolid);
  };

  const navbarStyle = {
    backgroundColor: navbarSolid
      ? "rgba(255, 255, 255, 1)"
      : "rgba(255, 255, 255, 0.8)",
    boxShadow: navbarSolid ? "0 2px 4px rgba(0, 0, 0, 0.1)" : "none",
    transition: "background-color 0.3s ease, box-shadow 0.3s ease",
  };
  return (
    <section>
      <div
        className="navbar fixed top-0 left-0 w-full z-10"
        style={navbarStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex justify-center p-6 space-x-6 text-black text-[16px] font-semibold ">
          <div>
            <Link href="#about" className="hover:text-[#717886]">
              About
            </Link>
          </div>
          <div>
            <Link href="#skills" className="hover:text-[#717886]">
              Skills
            </Link>
          </div>
          <div>
            <Link href="#education " className="hover:text-[#717886]">
              Education
            </Link>
          </div>
          <div>
            <Link href="#experience" className="hover:text-[#717886]">
              Experience
            </Link>
          </div>
          <div>
            <Link href="#contact" className="hover:text-[#717886]">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Navbar;

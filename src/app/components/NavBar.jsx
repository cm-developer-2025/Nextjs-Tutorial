import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineHome } from "react-icons/ai";
function NavBar() {
  return (
    <div className="w-full bg-sky-700 p-5 text-white">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <div className="md:flex hidden gap-7 items-center">
          <div>
            <Link href="/home">
              <AiOutlineHome size={24} className="text-teal-500" />
            </Link>
          </div>
          <div>
            <Link href="/about">About</Link>
          </div>
          <div>
            <Link target="_blank" href="https://www.youtube.com/@EzyCode">
              {" "}
              YouTube
            </Link>
          </div>
          <div>Contact</div>
          <div>Gallery</div>
        </div>
        <div className="md:hidden cursor-pointer">
          <RxHamburgerMenu />
        </div>
      </div>
    </div>
  );
}

export default NavBar;

// sm : small
// md: tab
// lg : desktop
// xl : TV

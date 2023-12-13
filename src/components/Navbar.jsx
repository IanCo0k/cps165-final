import { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import {
  PaperAirplaneIcon,
  MoonIcon,
  SunIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="app">
      <nav>
        <div className="max-w-7xl mx-auto">
          <div className="flex text-gray-200 mx-auto justify-between w-5/6 ">
            {/* Primary menu and logo */}
            <div className="flex items-center gap-16 my-12">
              {/* logo */}
              <div>
                <Link to="/" className="flex gap-1 font-bold text-gray-300 items-center ">
                  <PaperAirplaneIcon className="h-6 w-6 text-primary" />
                  <span>Ian Cook</span>
                </Link>
              </div>
              {/* primary */}
              <div className="hidden lg:flex gap-8 ">
                <Link to="/" className=""> {/* Update the href to to="/" */}
                  Home
                </Link>
                <Link to="/education"> {/* Update the href to to="/education" */}
                  Education
                </Link>
                <Link to="/work-experience"> {/* Update the href to to="/work-experience" */}
                  Work Experience
                </Link>
                <Link to="/service"> {/* Update the href to to="/service" */}
                  Service
                </Link>
                <Link to="/hobbies"> {/* Update the href to to="/hobbies" */}
                  Hobbies
                </Link>
              </div>
            </div>
            {/* secondary */}
            <div className="flex gap-6">
              <div className="hidden xs:flex items-center gap-10">
                <div className="hidden lg:flex items-center gap-2">
                  <MoonIcon className="h-6 w-6" />
                  <SunIcon className="h-6 w-6" />
                </div>
                <div>
                  <button className="rounded-full border-solid border-2 border-gray-300 py-2 px-4 hover:bg-gray-700 hover:text-gray-100">
                    Free Trial
                  </button>
                </div>
              </div>
              {/* Mobile navigation toggle */}
              <div className="lg:hidden flex items-center">
                <button onClick={() => setToggleMenu(!toggleMenu)}>
                  <Bars3Icon className="h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* mobile navigation */}
        <div
          className={`fixed z-40 w-full  bg-gray-100 overflow-hidden flex flex-col lg:hidden gap-12  origin-top duration-700 ${
            !toggleMenu ? "h-0" : "h-full"
          }`}
        >
          <div className="px-8">
            <div className="flex flex-col gap-8 font-bold tracking-wider">
              <Link to="/"> {/* Update the href to to="/" */}
                Home
              </Link>
              <Link to="/education"> {/* Update the href to to="/education" */}
                Education
              </Link>
              <Link to="/work-experience"> {/* Update the href to to="/work-experience" */}
                Work Experience
              </Link>
              <Link to="/service"> {/* Update the href to to="/service" */}
                Service
              </Link>
              <Link to="/hobbies"> {/* Update the href to to="/hobbies" */}
                Hobbies
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

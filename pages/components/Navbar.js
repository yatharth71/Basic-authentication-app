import React from "react";
import { useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase/index";

const Navbar = (props) => {
  const [user, setUser] = useState(null);

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">AUTH APP</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          {user ? (
            <button
              className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              onClick={async () => {
                await signOut(auth);
              }}
            >
              Logout
            </button>
          ) : (
            <a className="mr-5 hover:text-gray-900" href={props.redirect}>
              {props.heading}
            </a>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

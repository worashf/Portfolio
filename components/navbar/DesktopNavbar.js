import {
  Megaphone,
  Briefcase,
  GraduationCap,
  AddressBook,
  File,
  House,
} from 'phosphor-react';

import Link from 'next/link';
import Image from 'next/image';

const DesktopNavbar = ({ sideBarRef }) => {
  return (
    <div
      ref={sideBarRef}
      className=" bg-bg-side w-full space-y-10 px-5 py-7 absolute inset-y-0 left-0 transform -translate-x-full
    md:relative md:w-80 md:translate-x-0 z-50 transition duration-200 ease-in-out flex flex-col child:transition-all md:max-h-screen md:min-h-screen md:sticky md:top-0"
    >
      <Link href="/">
        <div className="flex flex-col md:mx-2.5  pb-3 w-30 ">
          <Image
            width="100"
            height="100"
            className="mb-3 w-24 h-24 rounded-full shadow-lg"
            src="/static/profile/worash.jpeg"
            alt="Worash image"
          />
          <h5 className="mb-1 text-md font-medium text-blue-600">
            Worash Abocherugn
          </h5>
          <span className="text-sm font-medium text-white ">
            FULL-STACK WEB DEVELOPER
          </span>
        </div>
      </Link>
      <nav className="flex flex-col grow space-y-2">
        <Link href="/" passHref>
          <div className="flex flex-row py-1.5 px-4 transition duration-200 rounded items-center space-x-3 hover:bg-blue-600 hover:text-white">
            <House size={20} />
            <p>Home</p>
          </div>
        </Link>
        <Link href="/about" passHref>
          <div className="flex flex-row py-1.5 px-4 transition duration-200 rounded items-center space-x-3 hover:bg-blue-600 hover:text-white">
            <Megaphone size={20} />
            <p>About</p>
          </div>
        </Link>
        <Link href="/portfolio">
          <div className="flex flex-row py-1.5 px-4 transition duration-200 rounded items-center space-x-3 hover:bg-blue-600 hover:text-white">
            <Briefcase size={20} />
            <p>Portfolio</p>
          </div>
        </Link>
        <Link href="/skills" passHref>
          <div className="flex flex-row py-1.5 px-4 transition duration-200 rounded items-center space-x-3 hover:bg-blue-600 hover:text-white">
            <GraduationCap size={20} />
            <p>Skills</p>
          </div>
        </Link>
        <Link href="/cv" passHref>
          <div className="flex flex-row py-1.5 px-4 transition duration-200 rounded items-center space-x-3 hover:bg-blue-600 hover:text-white">
            <File size={20} />
            <p>CV</p>
          </div>
        </Link>
        <Link href="/contact" passHref>
          <div className="flex flex-row py-1.5 px-4 transition duration-200 rounded items-center space-x-3 hover:bg-blue-600 hover:text-white">
            <AddressBook size={20} />
            <p>Contact</p>
          </div>
        </Link>
      </nav>

      <div className="flex flex-row w-full items-center  rounded py-2.5 my-20 space-x-2 hover:text-white transition duration-200">
        <div className="hover:bg-blue-600 p-1">
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="hover:bg-blue-600 p-1">
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
          </svg>
        </div>
        <div className="hover:bg-blue-600  p-1">
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="hover:bg-blue-600  p-1">
          <svg
            className="w-5 h-5 "
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 448 512"
          >
            <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default DesktopNavbar;

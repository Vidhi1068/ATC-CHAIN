import React from "react";

import Image from "next/image";

const Footer = () => {
  return (
    <footer className=" mt-[6.5rem] sm:relative ">
      {/* uppersmall div */}
      <div className="h-[11.5rem] sm:w-[37rem] xl:w-[57rem] sm:absolute sm:z-10 sm:ml-[6.0rem] xl:ml-[16rem] xl:mt-[2.5rem] lg:w-[46rem] lg:ml-[9rem]">
        <div className="grid grid-cols-1  lg:grid-col-1 lg:grid-cols-1 gap-6 bg-btn-primary sm:bg-text-secondary rounded-[1.6rem] ml-2 mr-2">
          {/* heading */}
          <div className="">
            <p className="text-center text-xs text-white font-sans mt-6">
              WALL OF FAME
            </p>
          </div>
          {/* titlename */}
          <div className="">
            <h4 className="text-center  text-white text-xl ">Our Clients</h4>
          </div>
          {/* imgs */}
          <div className="flex justify-between p-2.5 sm:p-[1.625rem]  mb-[0.5rem]  ">
            <Image
              className="h-[3rem] w-[2.5rem]"
              src="/assets/images/client1.png"
              alt="client1"
              width={100}
              height={100}
            />

            <Image
              className="h-[3rem] w-[2.5rem]"
              src="/assets/images/client2.png"
              alt="client2"
              width={100}
              height={100}
            />
            <Image
              className="h-[3rem] w-[2.5rem]"
              src="/assets/images/client3.png"
              alt="client3"
              width={100}
              height={100}
            />
            <Image
              className="h-[3rem] w-[2.5rem]"
              src="/assets/images/client2.png"
              alt="client2"
              width={100}
              height={100}
            />
            <Image
              className="h-[3rem] w-[2.5rem]"
              src="/assets/images/client1.png"
              alt="client1"
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>

      {/* FooterImagebackground Section */}
      <div className="mt-6 sm-h-screen bg-cover relative bg-no-repeat sm:bg-[url('/assets/images/FinalFooter.png')] bg-[url('/assets/images/Footerforsmallscreen.png')] xl:p-[2.5rem] ">
        {/* Inimagebckground anothre container */}

        <div className="grid grid-cols-1 xl:grid-cols-4 md:grid-cols-4  ml-6 sm:ml-[4.5rem] pt-[2rem] sm:pt-[5rem] xl:pl-[9.3rem] xl:mb-6 xl:mt-6 lg:ml-[7.5rem]">
          {/* ATCchian contact detail */}
          <div className="mt-6 mb-[0.5rem]">
            <h2 className="font-bold text-2xl md:text-xl text-white mb-4 sm:mt-[11rem]">
              ATC Chain
            </h2>
            <p className="text-xs w-64 text-gray-300 mb-4">
              4517 Washington Ave. Manchaster, Kentucky 39495
            </p>
            <p className="text-xs text-gray-300 mb-4">(689) 555-0102</p>
            <p className="text-xs text-gray-300 mb-4">(603) 555-0123</p>
          </div>

          {/* quickLinks Section */}
          <div className="mt-6 sm:ml-[1rem] mb-[1.5rem] md:ml-[3rem]">
            <h2 className="linksHeading  text-2xl md:text-xl text-white sm:mt-[11rem] ">
              Quick Links
            </h2>
            <div className="links">
              <ul className="flex-col flex-wrap items-center mt-3  sm:mt-0 font-bold space-y-2">
                <li>
                  <a
                    href="/Industries"
                    className="mr-4 hover:underline xl:mr-6 text-xs text-gray-300"
                  >
                    Industries
                  </a>
                </li>
                <li>
                  <a
                    href="/Product"
                    className="mr-4 hover:underline xl:mr-6  text-xs text-gray-300"
                  >
                    Products
                  </a>
                </li>
                <li>
                  <a
                    href="/About"
                    className="mr-4 hover:underline xl:mr-6 text-xs text-gray-300"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/News"
                    className="mr-4 hover:underline xl:mr-6 text-xs text-gray-300"
                  >
                    News
                  </a>
                </li>
                <li>
                  <a
                    href="/Video"
                    className="hover:underline text-xs text-gray-300"
                  >
                    Video
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Download Section */}
          <div className="space-y-4 mt-6 mb-[2.5rem] sm:ml-[1rem]">
            <h1 className="  text-2xl md:text-xl text-white sm:mt-[11rem]">
              Download
            </h1>
            <div className="bg-gray-light w-[17rem] sm:w-[18rem] rounded-xl h-36 sm:h-[8rem] p-6">
              <h4 className=" text-white text-sm mb-6">
                Product Detail & Specification
              </h4>
              <button
                type="submit"
                className="bg-btn-secondary h-[2.1rem] w-[11rem] rounded-full text-white"
              >
                Download
              </button>
            </div>
          </div>
        </div>

        {/* copyRightSection */}
        <div className="mt-6 sm:hidden ml-6">
          <span className=" text-xs sm:text-center position-absolute   text-gray-400">
            ©2021ATCChains.Allrightreserved.
            <a href="https://flowbite.com/" class="hover:underline"></a>
          </span>
        </div>

        {/* div for hr line */}
        <div className="sm:ml-[2.5rem] sm:mb-[0.9rem] xl:ml-[9.5rem]">
          <hr className="sm:w-[44rem] xl:w-[62rem] border-gray-500 lg:w-[54rem]" />
        </div>

        {/* div for big scrren copyright */}
        <div className="sm:flex hidden xl:ml-[7.5rem] md:items-end md:mt-6">
          <span className=" text-xs sm:text-center  sm:pl-[3.3rem] text-gray-400">
            ©2021ATCChains.Allrightreserved.
            <a href="https://flowbite.com/" className="hover:underline"></a>
          </span>

          <div className="sm:flex sm:gap-4 sm:w-[44rem] sm:items-end xl:w-[62rem] xl:ml-[41.25rem] md:ml-[23rem] lg:w-[54rem] lg:ml-[34rem]">
            <a className="" href="https://www.facebook.com/">
              <img
                src="/assets/images/logo/facebook.png"
                className="facebook"
              />
            </a>

            <a href="https://www.twitter.com/">
              <img src="/assets/images/logo/twitter.png" className="twitter" />
            </a>
            <a href="https://www.instagram.com/">
              <img src="/assets/images/logo/instagram.png" className="insta" />
            </a>
            <a href="https://in.linkedin.com/">
              <img
                src="/assets/images/logo/linkedin.png"
                className="linkedin"
              />
            </a>
          </div>
        </div>

        {/* div for side img */}

        <div className="hidden lg:block absolute  bottom-0 right-0">
          <Image
            src="/assets/images/globalelement2.png"
            alt="globalelement2"
            className=""
            width={100}
            height={100}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

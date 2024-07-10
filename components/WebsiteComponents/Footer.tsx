import { LandPlot } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <div className="relative">
      <div className="px-8 pt-20 pb-32 relative bg-white dark:bg-background">
        <div className="max-w-7xl mx-auto text-sm text-neutral-500 dark:text-neutral-400 flex sm:flex-row flex-col justify-between items-start ">
          <div>
            <div className="mr-4  md:flex mb-4">
              <a
                className="font-normal flex space-x-2 items-center text-sm mr-4  text-black px-2 py-1  relative z-20"
                href="/"
              >
               <LandPlot strokeWidth={3} absoluteStrokeWidth className="mr-2 h-6 w-6 dark:text-white" />
                <span className="font-medium text-black dark:text-white">
                  Plots 360
                </span>
              </a>
            </div>
            <div>Copyright © 2024 Every Labs</div>
            <div className="mt-2">All rights reserved</div>
          </div>
          <div className="grid grid-cols-3 gap-10 items-start mt-10 md:mt-0">
            <div className="flex justify-center space-y-4 flex-col mt-4">
              <a
                className="transition-colors hover:text-black text-black dark:text-white dark:hover:text-neutral-400 text-xs sm:text-sm"
                href="/pricing"
              >
                Pricing
              </a>
              <a
                className="transition-colors hover:text-black text-black dark:text-white dark:hover:text-neutral-400 text-xs sm:text-sm"
                href="/blog"
              >
                Blog
              </a>
              <a
                className="transition-colors hover:text-black text-black dark:text-white dark:hover:text-neutral-400 text-xs sm:text-sm"
                href="/contact"
              >
                Contact
              </a>
            </div>
            <div className="flex justify-center space-y-4 flex-col mt-4">
              <a
                className="transition-colors hover:text-black text-black dark:text-white dark:hover:text-neutral-400 text-xs sm:text-sm"
                href="#"
              >
                Privacy Policy
              </a>
              <a
                className="transition-colors hover:text-black text-black dark:text-white dark:hover:text-neutral-400 text-xs sm:text-sm"
                href="#"
              >
                Terms of Service
              </a>
              <a
                className="transition-colors hover:text-black text-black dark:text-white dark:hover:text-neutral-400 text-xs sm:text-sm"
                href="#"
              >
                Refund Policy
              </a>
            </div>
            <div className="flex justify-center space-y-4 flex-col mt-4">
              <a
                className="transition-colors hover:text-black text-black dark:text-white dark:hover:text-neutral-400 text-xs sm:text-sm"
                href="https://github.com/Rdrudra99"
              >
                Twitter
              </a>
              <a
                className="transition-colors hover:text-black text-black dark:text-white dark:hover:text-neutral-400 text-xs sm:text-sm"
                href="https://github.com/Rdrudra99"
              >
                LinkedIn
              </a>
              <a
                className="transition-colors hover:text-black text-black dark:text-white dark:hover:text-neutral-400 text-xs sm:text-sm"
                href="https://github.com/Rdrudra99"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center text-5xl md:text-9xl lg:text-[18rem] font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 dark:from-neutral-950 to-neutral-200 dark:to-neutral-800 inset-x-0">
      PLOTS360°
      </p>
    </div>
  );
};

export default Footer;

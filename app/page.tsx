import AnimatedTooltipPreview from "@/components/Extra/avatarimage";
import Footer from "@/components/WebsiteComponents/Footer";
import GoogleGeminiEffectDemo from "@/components/WebsiteComponents/Hero3";
import ImagesSliderDemo from "@/components/WebsiteComponents/HeroSection";
import HeroParallaxDemo from "@/components/WebsiteComponents/HeroSectionOther";
import MarqueeDemo from "@/components/WebsiteComponents/Marque";
import FloatingNavDemo from "@/components/WebsiteComponents/Navbar";
import Navbar1 from "@/components/WebsiteComponents/Navbar1";
import ProductSection from "@/components/WebsiteComponents/ProductSection";
import HeroScrollDemo from "@/components/WebsiteComponents/SecondSection";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { SparklesCore } from "@/components/ui/sparkles";
import { PhoneCall, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full h-full">
      <Navbar1 />
      <section className="max-w-7xl mx-auto px-4 flex flex-col items-center justify-center">
        <div className="h-[40rem] w-full  flex flex-col items-center justify-center overflow-hidden rounded-md">
          <h1 className="text-4xl md:text-4xl lg:text-7xl font-semibold max-w-6xl mx-auto text-center mt-6 relative z-10 py-6">
            The Best Investment on Earth is Earth - Louis Glickman
          </h1>
          <div className="w-[40rem] h-40 relative">
            {/* Gradients */}
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

            <div className="pt-10">
              <AnimatedTooltipPreview />
              <div className="flex justify-center ml-6 items-center">
                {[1, 2, 3, 4, 5].map((index) => {
                  return (
                    <svg
                      key={index}
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 16 16"
                      className="h-4 w-4 text-yellow-400 mx-1"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                    </svg>
                  );
                })}
              </div>
              <div className="flex justify-center pt-4">
                <Link
                  className="flex items-center gap-4 justify-center mt-6"
                  href="/"
                >
                  <HoverBorderGradient
                    containerClassName="rounded-full"
                    as="button"
                    className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-4"
                  >
                    <PhoneCall strokeWidth={2} />
                    <span>Call Now for Booking</span>
                  </HoverBorderGradient>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-full">
          <HeroScrollDemo />
        </div>
      </section>
      <section className="">
          <ProductSection />
      </section>
      <section>
        <MarqueeDemo />
      </section>
      <Footer />
    </main>
  );
}

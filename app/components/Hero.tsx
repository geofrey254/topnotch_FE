import React from "react";
import Image from "next/image";
import English from "../assets/english_guru.png";
import Link from "next/link";

function Hero() {
  return (
    <section className="hero flex justify-center items-center w-full h-[40vh] md:h-[90vh] xl:h-[80vh] md:mt-14 p-4 md:p-0">
      <div className="container relative book_ad flex justify-between items-center p-0 md:p-12 xl:p-24 rounded-xl">
        <div className="left flex flex-col gap-2 md:gap-4 p-4 md:p-0 z-10">
          <h4 className="text-xl md:text-5xl font-bold text-[#cf2025] md:text-[#f8f8f8] bg-white md:bg-transparent rounded-xl p-2 w-[180px] md:w-full">
            DISCOUNT 20%
          </h4>
          <h3 className="book_title text-4xl md:text-6xl xl:text-8xl text-white font-black md:font-bold text-nowrap">
            ENGLISH GURU
          </h3>
          <h5 className="book_title font-bold text-sm md:text-xl xl:text-2xl text-white md:text-[#350203]">
            Discover the Book Everyone{"'"}s Talking About!
          </h5>
          <div className="flex items-center justify-start gap-3 md:gap-14 mt-8 md:mt-0 xl:mt-12">
            <Link
              href="#"
              className="bg-white md:bg-[#cf2025] p-2 text-center rounded-lg text-[#cf2025] md:text-white w-[10rem]"
            >
              Buy Now
            </Link>
            <Link
              href="#"
              className="bg-[#350203] p-2 text-center rounded-lg text-white w-[10rem] hidden md:block"
            >
              Details
            </Link>
          </div>
        </div>
        <div className="right absolute md:relative">
          <Image
            src={English}
            width={400}
            height={400}
            alt="text_book"
            className="w-[350px] md:w-[600px] ml-32"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;

import React from "react";
import Image from "next/image";
import Link from "next/link";
import top from "@/public/assets/top_picks.png";
import offer from "@/public/assets/offer.png";
import just_in from "@/public/assets/arrivals.png";

function Features() {
  return (
    <section className="features flex justify-center items-center w-full p-0 md:p-8">
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-6 p-8 md:p-0">
        <Link href="#">
          <Image
            src={top}
            width={650}
            height={650}
            className="rounded-2xl shadow-xl shadow-black hover:shadow-lg hover:shadow-[#cf2025]"
            alt="feature images"
          />
        </Link>
        <Link href="#">
          <Image
            src={offer}
            width={650}
            height={650}
            className="rounded-2xl shadow-xl shadow-black hover:shadow-lg hover:shadow-[#cf2025]"
            alt="feature images"
          />
        </Link>
        <Link href="#">
          <Image
            src={just_in}
            width={650}
            height={650}
            className="rounded-2xl shadow-xl shadow-black hover:shadow-lg hover:shadow-[#cf2025]"
            alt="feature images"
          />
        </Link>
      </div>
    </section>
  );
}

export default Features;

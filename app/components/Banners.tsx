import React from "react";
import Link from "next/link";

function Banners() {
  return (
    <section className="flex w-full justify-center items-center">
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 p-2">
        <div className="bg-[url('/assets/school.jpg')] h-[30vh] md:h-[50vh] bg-center bg-cover rounded-xl md:col-span-2 flex flex-col justify-center items-center">
          <h4 className="text-4xl font-bold text-[#350203] mb-8">
            Lab Equipment
          </h4>
          <div>
            <Link className="text-white " href="#">
              Discover More
            </Link>
            <hr />
          </div>
        </div>
        <div className="bg_svg rounded-xl p-4 flex flex-col justify-center items-center text-center gap-8">
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              School Stationery Deals
            </h2>
            <h5 className="text-white">
              School bags, Pencils, Rulers, Exercise Books and More...
            </h5>
          </div>
          <div>
            <Link className="text-white " href="#">
              Discover More
            </Link>
            <hr />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banners;

import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { FaRegCreditCard } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { MdDiscount } from "react-icons/md";

function Jumbo() {
  return (
    <section className="jumbo flex justify-center items-center w-full p-0 md:p-8">
      <div className="container grid grid-cols-2 md:grid-cols-4 gap-6 justify-center items-center text-center">
        <div className="flex flex-col justify-center items-center">
          <TbTruckDelivery size={40} className="text-[#cf2025] mb-2 md:mb-6" />
          <h5 className="font-bold">Free Delivery</h5>
          <p className="text-sm">For orders above Kes. 4000</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <FaRegCreditCard size={40} className="text-[#cf2025] mb-2 md:mb-6" />
          <h5 className="font-bold">Secure Payment</h5>
          <p className="text-sm">100% secure payment</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <BiSupport size={40} className="text-[#cf2025] mb-2 md:mb-6" />
          <h5 className="font-bold">24/7 Support</h5>
          <p className="text-sm">Dedicated Support</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <MdDiscount size={40} className="text-[#cf2025] mb-2 md:mb-6" />
          <h5 className="font-bold">Member Discounts</h5>
          <p className="text-sm">Unlock special savings.</p>
        </div>
      </div>
    </section>
  );
}

export default Jumbo;
